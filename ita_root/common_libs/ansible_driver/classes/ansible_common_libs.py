# Copyright 2022 NEC Corporation#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

"""
Ansible共通module
"""

import json

from flask import g
from pathlib import Path

from common_libs.common.dbconnect import *
from common_libs.ansible_driver.classes import *
from ita_root.ita_api_admin.common_libs.ansible_driver.classes.AnsibleMakeMessage import AnsibleMakeMessage


class AnsibleCommonLibs():
    """
    Ansible共通class
    F0001  set_run_mode
    F0002  GetRunMode
    F0003  getCPFVarsMaster
    F0004  chkCPFVarsMasterReg
    F0005  getTPFVarsMaster
    F0006  chkTPFVarsMasterReg
    F0007  getGBLVarsMaster
    F0008  chkGBLVarsMasterReg
    F0009  CommonVarssAanalys
    F0010  selectDBRecodes
    """
    
    # 定数定義
    LV_RUN_MODE = ""
    WS_DB = None
    LC_RUN_MODE_STD = "0"
    LC_RUN_MODE_VARFILE = "1"

    def __init__(self, run_mode=LC_RUN_MODE_STD):
        self.LV_RUN_MODE = run_mode
        organization_id = g.get('ORGANIZATION_ID')
        workspace_id = g.get('WORKSPACE_ID')
        self.WS_DB = DBConnectWs(workspace_id, organization_id)

    def set_run_mode(self, run_mode):
        """
        処理モードを変数定義ファイルチェックに設定

        Arguments:
            run_mode: 処理モード　LC_RUN_MODE_STD/LC_RUN_MODE_VARFILE
        """
        self.LV_RUN_MODE = run_mode

    def get_run_mode(self):
        """
        処理モード取得

        returns:
            処理モード　LC_RUN_MODE_STD/LC_RUN_MODE_VARFILE
        """
        return self.LV_RUN_MODE

    def get_cpf_vars_master(self, in_cpf_var_name):
        """
        ファイル管理の情報をデータベースより取得する。
        
        Arguments:
            in_cpf_var_name: CPF変数名

        Returns:
            is success:(bool)
            in_cpf_key: PKey格納変数
            in_cpf_file_name: ファイル格納変数
        """
        
        in_cpf_key = ""
        in_cpf_file_name = ""
        
        where = "WHERE  CONTENTS_FILE_VARS_NAME = " + in_cpf_var_name + " and DISUSE_FLAG = '0'"
        
        data_list = self.WS_DB.table_select("T_ANSC_CONTENTS_FILE", where, [])

        if len(data_list) < 1:
            return True, in_cpf_key, in_cpf_file_name
        
        for data in data_list:
            in_cpf_key = data["CONTENTS_FILE_ID"]
            in_cpf_file_name = data["CONTENTS_FILE"]
        
        return True, in_cpf_key, in_cpf_file_name

    def chk_cpf_vars_master_reg(ina_cpf_vars_list):
        """
        CPF変数がファイル管理に登録されているか判定
        
        Arguments:
            ina_cpf_vars_list: CPF変数リスト

        Returns:
            is success:(bool)
        """
        bool_ret = True
        fatal_error = False
        in_errmsg = []
        
        ams = AnsibleMakeMessage()
        
        # CPF変数がファイル管理に登録されているか判定
        for tgt_file_list, role_name in ina_cpf_vars_list.items():
            for line_no_list, tgt_file in tgt_file_list.items():
                for cpf_var_name_list, line_no in line_no_list.items():
                    for dummy, cpf_var_name in cpf_var_name_list.items():
                        
                        # CPF変数名からファイル管理とPkeyを取得する。
                        ret = get_cpf_vars_master(cpf_var_name)
                        
                        # CPF変数名が未登録の場合
                        if ret[1] == "":
                            if in_errmsg != "":
                                in_errmsg = in_errmsg + "\n"
                            
                            in_errmsg = in_errmsg + ams.AnsibleMakeMessage(get_run_mode(), "MSG-10408", [role_name, tgt_file, line_no, cpf_var_name])
                            bool_ret = False
                            break
                        else:
                            # ファイル名が未登録の場合
                            if ret[2] == "":
                                if in_errmsg != "":
                                    in_errmsg = in_errmsg + "\n"
                            
                                in_errmsg = in_errmsg + ams.AnsibleMakeMessage(get_run_mode(), "MSG-10409", [role_name, tgt_file, line_no, cpf_var_name])
                                bool_ret = False
                                continue
                        
                        ina_cpf_vars_list[role_name][tgt_file][line_no][cpf_var_name] = []
                        ina_cpf_vars_list[role_name][tgt_file][line_no][cpf_var_name]['CONTENTS_FILE_ID'] = ret[1]
                        ina_cpf_vars_list[role_name][tgt_file][line_no][cpf_var_name]['CONTENTS_FILE'] = ret[2]
                        
                    if fatal_error:
                        break
                    
                if fatal_error:
                    break
            
            if fatal_error:
                break
        
        return bool_ret
        
    def get_tpf_vars_master(self, in_tpf_var_name):
        """
        テンプレート管理の情報をデータベースより取得する。
        
        Arguments:
            in_cpf_var_name: TPF変数名

        Returns:
            is success:(bool)
            ina_row: 登録情報
        """
        
        where = "WHERE  ANS_TEMPLATE_VARS_NAME = '" + in_tpf_var_name + "' AND DISUSE_FLAG = '0'"
        
        data_list = self.WS_DB.table_select("T_ANSC_TEMPLATE_FILE", where, [])
        
        ina_row = []
        
        if len(data_list) < 1:
            return True, ina_row
        
        for data in data_list:
            ina_row.append(data)
        
        return True, ina_row
    
    def chk_tpf_vars_master_reg(ina_tpf_vars_list):
        """
        TPF変数がテンプレート管理に登録されているか判定
        
        Arguments:
            ina_tpf_vars_list: TPF変数リスト

        Returns:
            is success:(bool)
        """
        
        bool_ret = True
        in_errmsg = ""
        fatal_error = False
        
        ams = AnsibleMakeMessage()
        
        # GBL変数にファイル管理に登録されているか判定
        for tgt_file_list, role_name in ina_tpf_vars_list:
            for line_no_list, tgt_file in tgt_file_list:
                for tpf_var_name_list, line_no in line_no_list:
                    for dummy, tpf_var_name in tpf_var_name_list:
                        ret = get_tpf_vars_master(tpf_var_name)
                        
                        # TPF変数名が未登録の場合
                        tpf_key = ""
                        tpf_file_name = ""
                        
                        if len(ret[1]) != 0:
                            tpf_key = ret[1]['ANS_TEMPLATE_ID']
                            tpf_file_name = ret[1]['ANS_TEMPLATE_FILE']
                        
                        if tpf_key == "":
                            if in_errmsg != "":
                                in_errmsg = in_errmsg + "\n"
                            
                            in_errmsg = in_errmsg + ams.AnsibleMakeMessage(get_run_mode(), "MSG-10559", [role_name, tgt_file, line_no, tpf_var_name])
                            bool_ret = False
                            continue
                        
                        else:
                            if tpf_var_name == "":
                                if in_errmsg != "":
                                    in_errmsg = in_errmsg + "\n"
                            
                                in_errmsg = in_errmsg + ams.AnsibleMakeMessage(get_run_mode(), "MSG-10557", [role_name, tgt_file, line_no, tpf_var_name])
                                bool_ret = False
                                continue
                        
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name] = []
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name]['CONTENTS_FILE_ID'] = tpf_key
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name]['CONTENTS_FILE'] = tpf_file_name
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name]['ROLE_ONLY_FLAG'] = ret[1]['ROLE_ONLY_FLAG']
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name]['VARS_LIST'] = ret[1]['VARS_LIST']
                        ina_tpf_vars_list[role_name][tgt_file][line_no][tpf_var_name]['VAR_STRUCT_ANAL_JSON_STRING'] = ret[1]['VARSTRUCT_ANAL_JSON_STRING_FILE']
                        
                        if fatal_error:
                            break
                        
                    if fatal_error:
                        break
                
                if fatal_error:
                    break
                
            return bool_ret
    
    def get_gbl_vars_master(self, in_gbl_var_name, in_gbl_key):
        """
        グローバル管理の情報をデータベースより取得する。
        
        Arguments:
            in_gbl_var_name: GBL変数名
            in_gbl_key: PKey格納変数

        Returns:
            is success:(bool)
            in_gbl_key: PKey格納変数
        """

        in_gbl_key = ""
        
        where = "WHERE VARS_NAME = '" + in_gbl_var_name + "' AND DISUSE_FLAG = '0'"
        
        data_list = self.WS_DB.table_select("T_ANSC_GLOBAL_VAR", where, [])
        
        if len(data_list) < 1:
            return True, in_gbl_key
        
        for data in data_list:
            in_gbl_key = data['GBL_VARS_NAME_ID']
        
        return True, in_gbl_key
        
    def chk_gbl_vars_master_reg(ina_gbl_vars_list):
        """
        GBL変数がファイル管理に登録されているか判定
        
        Arguments:
            ina_gbl_vars_list: GBL変数リスト

        Returns:
            is success:(bool)
        """
        
        bool_ret = True
        fatal_error = False
        in_errmsg = ""
        
        ams = AnsibleMakeMessage()
        
        # GBL変数にファイル管理に登録されているか判定
        for tgt_file_list, role_name in ina_gbl_vars_list:
            for line_no_list, tgt_file in tgt_file_list:
                for gbl_var_name_list, line_no in line_no_list:
                    for dummy, gbl_var_name in gbl_var_name_list:
                        gbl_key = ""
                        
                        ret = get_gbl_vars_master(gbl_var_name)
                        
                        # CPF変数名が未登録の場合
                        if ret[1] == "":
                            if in_errmsg != "":
                                in_errmsg = in_errmsg + "\n"
                            
                            in_errmsg = in_errmsg + ams.AnsibleMakeMessage(get_run_mode(), "MSG-10571", [role_name, tgt_file, line_no, gbl_var_name])
                            bool_ret = False
                            break
                            
                        ina_gbl_vars_list[role_name][tgt_file][line_no][gbl_var_name] = []
                        ina_gbl_vars_list[role_name][tgt_file][line_no][gbl_var_name]['CONTENTS_FILE_ID'] = gbl_key
                        
                    if fatal_error:
                        break
                    
                if fatal_error:
                    break
            
            if fatal_error:
                break
        
        return bool_ret
    
    def common_varss_aanalys(in_filename, out_filename, fillter_vars=False):
        """
        Legacy/PioneerでアップロードされるPlaybook素材よの共通変数を抜き出す
        FileUploadColumn:checkTempFileBeforeMoveOnPreLoadイベント用
        
        Arguments:
            in_filename: アップロードされたデータが格納されているファイル名

        Returns:
            ret_array: is success, エラーメッセージ 
        """
        
        bool_ret = True
        
        playbook_data_string = open(in_filename)
        
        local_vars = []
        vars_line_array = []
        vars_array = []
        str_err_msg = None
        
        wsra = WrappedStringReplaceAdmin()
        # インベントリ追加オプションに定義されている変数を抜き出す。
        ret = wsra.SimpleFillterVerSearch("CPF_", playbook_data_string, vars_line_array, vars_array, local_vars, fillter_vars)

        cpf_vars_list = []
        for vars_info, no in ret[0]:
            for var_name, line_no in vars_info:
                cpf_vars_list['dummy']['Upload file'][line_no][var_name] = 0
                
        ret = wsra.SimpleFillterVerSearch("TPF_", playbook_data_string, vars_line_array, vars_array, local_vars, fillter_vars)
        
        tpf_vars_list = []
        for vars_info, no in ret[0]:
            for var_name, line_no in vars_info:
                tpf_vars_list['dummy']['Upload file'][line_no][var_name] = 0
        
        ret = wsra.SimpleFillterVerSearch("GBL_", playbook_data_string, vars_line_array, vars_array, local_vars, fillter_vars)
        
        gbl_vars_list = []
        for vars_info, no in ret[0]:
            for var_name, line_no in vars_info:
                gbl_vars_list['dummy']['Upload file'][line_no][var_name] = 0
        
        gbl_vars = '1'
        cpf_vars = '2'
        tpf_vars = '3'
        save_vars_list = []
        save_vars_list[gbl_vars] = []
        save_vars_list[cpf_vars] = []
        save_vars_list[tpf_vars] = []
        
        if bool_ret:
            for tgt_file_list, role_name in cpf_vars_list:
                for line_no_list, tgt_file in tgt_file_list:
                    for cpf_var_name_list, line_no in line_no_list:
                        for dummy, cpf_var_name in cpf_var_name_list:
                            save_vars_list[cpf_vars][cpf_var_name] = 0
        
        if bool_ret:
            for tgt_file_list, tgt_file_list in tpf_vars_list:
                for line_no_list, tgt_file in tgt_file_list:
                    for tpf_var_name_list, line_no in line_no_list:
                        for dummy, tpf_var_name in tpf_var_name_list:
                            save_vars_list[tpf_vars][tpf_var_name] = 0
        
        if bool_ret:
            for tgt_file_list, tgt_file_list in gbl_vars_list:
                for line_no_list, tgt_file in tgt_file_list:
                    for gbl_var_name_list, line_no in line_no_list:
                        for dummy, gbl_var_name in gbl_var_name_list:
                            save_vars_list[gbl_var_name][tpf_var_name] = 0
                            
        if bool_ret:
            json_encode = json.dump(save_vars_list)
            path = out_filename
            
            try:
                Path(path).write_text(json_encode, encoding="utf-8")
            except Exception:
                bool_ret = False
                str_err_msg = g.appmsg.get_api_message('MSG-10570', [])
        
        if len(str_err_msg) != 0:
            str_err_msg.replace('\n', '<BR>')
        
        ret_array = list[bool_ret, str_err_msg]
        
        return ret_array
    
    def select_db_recodes(self, in_sql, in_key):
        """
        指定されたデータベースの全有効レコードを取得する。
        
        Arguments:
            in_sql: SQL
            in_key: 登録レコードの配列のキー項目

        Returns:
            is success:(bool)
            ina_row: 登録レコードの配列
        """
        
        data_list = self.WS_DB.sql_execute(in_sql, [])
        
        ina_row = []
        for data in data_list:
            ina_row[data[in_key]] = data
        
        return True, ina_row