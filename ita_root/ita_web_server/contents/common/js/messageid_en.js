////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   Exastro IT Automation / messageid_en.js
//
//   -----------------------------------------------------------------------------------------------
//
//   Copyright 2022 NEC Corporation
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////////////////////////

// メッセージIDの頭文字 FTE
// 標準メニュー        00001～01000
// メニュー定義・作成   01001～02000
// Conductorクラス編集 02001～03000
// Conductor作業確認   03001～04000
// 作業実行            04001～05000
// 作業状態確認        05001～06000
// 
// Ui common           10001～11000


const getMessage = ( function() {

    const message = {
        // Default menu
        'FTE00001' : "Filter",
        'FTE00002' : "Close",
        'FTE00003' : "Open",
        'FTE00004' : "Please make a selection.",
        'FTE00005' : "Working execution",
        'FTE00006' : "Dry run",
        'FTE00007' : "Parameter Confirmation",
        'FTE00008' : "Register",
        'FTE00009' : "Edit",
        'FTE00010' : "This menu is for viewing only.",
        'FTE00011' : "Edit Confirmation",
        'FTE00012' : "Add",
        'FTE00013' : "Duplicate",
        'FTE00014' : "Delete",
        'FTE00015' : "Discard",
        'FTE00016' : "Restore",
        'FTE00017' : "Cancel edit",
        'FTE00018' : "Cancel Confirmation",
        'FTE00019' : "Do you have data that is being edited and would you like to discard it?",
        'FTE00020' : "Discard",
        'FTE00021' : "Back to edit",
        'FTE00022' : "Edit reflection",
        'FTE00023' : "Return to Registration/Editing",
        'FTE00024' : "Before change",
        'FTE00025' : "Non-display",
        'FTE00026' : "Display",
        'FTE00027' : "Historical view",
        'FTE00028' : "History reset",
        'FTE00029' : "Target",
        'FTE00030' : "and enter",
        'FTE00031' : "press the history display.",
        'FTE00032' : "Select",
        'FTE00033' : "Division",
        'FTE00034' : "Contents",
        'FTE00035' : "History log No.",
        'FTE00036' : "Change date/time",
        'FTE00037' : "Required",
        'FTE00038' : "Discard",
        'FTE00039' : "Search from pulldown",
        'FTE00040' : "All records",
        'FTE00041' : "Exclude discarded records",
        'FTE00042' : "Only discarded records",
        'FTE00043' : "Filter",
        'FTE00044' : "Clear filter",
        'FTE00045' : "Auto-filter",
        'FTE00046' : "Excel download",
        'FTE00047' : "JSON download",
        'FTE00048' : "Maximum line count for Excel output",
        'FTE00049' : "line",
        'FTE00050' : "cannot download because it has been exceeded.",
        'FTE00051' : "Operation",
        'FTE00052' : "Enter password",
        'FTE00053' : "Delete entered passwords",
        'FTE00054' : "There is no content available for display.",
        'FTE00055' : "The initial filter is off.",
        'FTE00056' : "Filter to view.",
        'FTE00057' : "History",
        'FTE00058' : "Number of filter results",
        'FTE00059' : "0 record",
        'FTE00060' : "Number of items to be displayed on one page",
        'FTE00061' : "page",
        'FTE00062' : "Number of edits",
        'FTE00063' : " records",
        'FTE00064' : "Share",
        'FTE00065' : "Validation error",
        'FTE00066' : "The number of items displayed has exceeded the recommended number of items to be displayed.",
        'FTE00067' : "The maximum number of items that can be displayed has been exceeded.",
        'FTE00068' : "Validation errors occurred.",
        'FTE00069' : "Register",
        'FTE00070' : "Error string",
        'FTE00071' : "Error",
        'FTE00072' : "Register",
        'FTE00073' : "Update",
        'FTE00074' : "Discard",
        'FTE00075' : "Restore",
        
        // Create menu
        'FTE01001' : "Item",
        'FTE01002' : "Group",
        'FTE01003' : "Cancel",
        'FTE01004' : "Redo",
        'FTE01005' : "Preview",
        'FTE01006' : "Log",
        'FTE01007' : "List(Preview)",
        'FTE01008' : "Menu creation information",
        'FTE01009' : "Basic information",
        'FTE01010' : "ID",
        'FTE01011' : "Auto-input",
        'FTE01012' : "Menu name",
        'FTE01013' : "Menu name(Rest)",
        'FTE01014' : "Creation target",
        'FTE01015' : "Display order",
        'FTE01016' : "Create as vertical menu",
        'FTE01017' : "Last modified",
        'FTE01018' : "Last updated by",
        'FTE01019' : "Target menu group",
        'FTE01020' : "Input",
        'FTE01021' : "Substitution value",
        'FTE01022' : "Reference",
        'FTE01023' : "Unique constraint(Multiple items)",
        'FTE01024' : "Pattern",
        'FTE01025' : "Permission role",
        'FTE01026' : "Role",
        'FTE01027' : "Explanation",
        'FTE01028' : "Remarks",
        'FTE01029' : "Enter the menu name of the menu to be created.\nThe maximum size is 255 bytes.\nThe menu name &quot;Main menu&quot; cannot be used.\n &quot;&#92;&#47;&#58;&#42;&#63;&#34;&#60;&#62;&#124;&#91;&#93;：￥／＊［］&quot; characters cannot be used.",
        'FTE01030' : "Enter the name for the REST API of the menu to be created.\nThe maximum size is 240 bytes.\nOnly single-byte alphanumeric characters and the symbol &quot;-_&quot; can be used.",
        'FTE01031' : "Select &quot;Parameter Sheet (Host / Operation)&quot; or\n&quot;Data Sheet (master available)&quot; from the pull-down menu.",
        'FTE01032' : "Enter the display order in the menu group. They are displayed in ascending order.\nInteger value from 0 to 2147483647 can be entered.",
        'FTE01033' : "If the &quot;use&quot; checkbox is checked, a parameter sheet corresponding to the vertical menu will be created.",
        'FTE01034' : "Yes",
        'FTE01035' : "Select Target menu group",
        'FTE01036' : "Select Unique constraint(Multiple items)",
        'FTE01037' : "Select Permission role",
        'FTE01038' : "Enter the description.\nThe maximum size is 1024 bytes.",
        'FTE01039' : "Enter the remarks.\nThe maximum size is 4000 bytes.",
        'FTE01040' : "Required item",
        'FTE01041' : "Create",
        'FTE01042' : "Edit",
        'FTE01043' : "Initialize",
        'FTE01044' : "Diversion new",
        'FTE01045' : "Menu creation history",
        'FTE01046' : "Create(Initialize)",
        'FTE01047' : "Reload",
        'FTE01048' : "Cancel",
        'FTE01049' : "Create(Edit)",
        'FTE01050' : "Close",
        'FTE01051' : "Decision",
        'FTE01052' : "Cansel",
        'FTE01053' : "Item",
        'FTE01054' : "Group",
        'FTE01055' : "Maximum number of bytes",
        'FTE01056' : "Regular expression",
        'FTE01057' : "Minimum value",
        'FTE01058' : "Maximum value",
        'FTE01059' : "Digit number",
        'FTE01060' : "Selection item",
        'FTE01061' : "Required",
        'FTE01062' : "Unique constraint",
        'FTE01063' : "Explanation",
        'FTE01064' : "Remark",
        'FTE01065' : "Host name",
        'FTE01066' : "Operation",
        'FTE01067' : "Parameter",
        'FTE01068' : "Operation name",
        'FTE01069' : "Reference date and time",
        'FTE01070' : "Scheduled date",
        'FTE01071' : "Last run date",
        'FTE01072' : "Remark",
        'FTE01073' : "Last Modified",
        'FTE01074' : "Last updated by",
        'FTE01075' : "Operation",
        'FTE01076' : "System Administrator",
        'FTE01077' : "Target menu group",
        'FTE01078' : "Repeat item will be canceled.",
        'FTE01079' : "Items containing repeats cannot be copied.",
        'FTE01080' : "Input",
        'FTE01081' : "Substitution<br>value",
        'FTE01082' : "Reference",
        'FTE01083' : "Menu group name",
        'FTE01084' : "About vertical menu",
        'FTE01085' : "Yes",
        'FTE01086' : "Maximum number of bytes in the file",
        'FTE01087' : "Reference item",
        'FTE01088' : "[Referenced value]",
        'FTE01089' : "Select reference item",
        'FTE01090' : "Create",
        'FTE01091' : "Unique constraint(Multiple items)",
        'FTE01092' : "Permission role",
        'FTE01093' : "Reference Item",
        'FTE01094' : "Default value",
        'FTE01095' : "Menu",
        'FTE01096' : "Item",
        'FTE01097' : "String",
        'FTE01098' : "Multi string",
        'FTE01099' : "Password",
        'FTE01100' : "File",
        'FTE01101' : "Link",
        'FTE01102' : "[Referenced value]",
        'FTE01103' : "Move item.",
        'FTE01104' : "Enter the item name to be displayed on the menu. \nThe maximum size is 256 bytes.\nDo not use \"/\" in the item names.\n\"Names [numbers] used in the repeat frame\" cannot be used for item names outside the repeat frame.",
        'FTE01105' : "Enter the name of the item (for REST API).",
        'FTE01106' : "Delete the item.",
        'FTE01107' : "Copy the item.",
        'FTE01108' : "Enter the number of repeats.\nInteger value from 2 to 99 can be entered.",
        'FTE01109' : "Selecte \"String\", \"Multi string\", \"Integer\", \"Decimal number\", \"Date\", \"Date/time\",\n\"Pull down selection\", \"Password\", \"File upload\", \"Link\" from the pulldown menu.",
        'FTE01110' : "Enter the maximum number of bytes.\nThe maximum size is 8192 bytes.\nFor editing, it is possible to increase it from the original value.\nThe byte count of half-width alphanumeric characters are equivalent to the number of characters.\nFor full-width characters, the number of characters x 3 + 2 bytes is required.",
        'FTE01111' : "If you want to check input values with regular expression, enter the regular expression.\nThe maximum size is 8192 bytes.\nExample: For half-width numeric items of 0 bytes or more: ^[0-9]*$\n For half-width alphanumeric characters of 1 byte or more: ^[a-zA-Z0-9]+$",
        'FTE01112' : "Enter the minimum value of the column.\nFor editing, it is possible to reduce it from the original value.\nInteger value from -2147483648 to 2147483647 can be entered.\nThe value will be -2147483648 if not entered.\nPlease enter value smaller than the maximum value.",
        'FTE01113' : "Enter the maximum value of the column.\nFor editing, it is possible to increase it from the original value.\nInteger value from -2147483648 to 2147483647 can be entered.\nThe value will be 2147483647 if not entered.\nPlease enter value larger than the minimum value.",
        'FTE01114' : "Enter the minimum value of the column.\nFor editing, it is possible to reduce it from the original value.\nInteger value from -99999999999999 to 99999999999999 with total digit for whole\nnumber + fraction part less than 14 digits can be entered.\nThe value will be -99999999999999 if not entered.\nPlease enter value smaller than the maximum value.",
        'FTE01115' : "Enter the maximum value of the column.\nFor editing, it is possible to increase it from the original value.\nInteger value from -99999999999999 to 99999999999999 with total digit for whole\nnumber + fraction part less than 14 digits can be entered.\nThe value will be 99999999999999 if not entered.\nPlease enter value larger than the minimum value.",
        'FTE01116' : "Enter the upper limit of the total digit for whole number + fraction part.\nFor editing, it is possible to increase it from the original valu.\n\nExample: 0.123 has 4 digits (whole number 1 digit, fraction part 3 digits)\n 11.1111 has 6 digits (whole number 2 digit2, fraction part 3 digits)\nInteger value from 1 to 14 can be entered.",
        'FTE01117' : "Select the item to be referenced in the pulldown menu from the pull-down menu.\n※Items that satisfy the following conditions are displayed in the pull-down menu .\nMenu: 「Basic Console: Device List」 and menu created with this function\nItem: String, required and unique constraint item.",
        'FTE01118' : "You can refer to other items based on the menu item you selected in \"Pulldown Selection\".",
        'FTE01119' : "Enter the maximum number of bytes for the file to upload.\nFor editing, it is possible to increase it from the original value.\nThe maximum size is 104857600 bytes.",
        'FTE01120' : "Select the item to be referenced from the menu items created in the Creation target \"Parameter Sheet(Operation)\".\nRefers to the value of the same operation from the selected items.",
        'FTE01121' : "When registering from the created menu, set the value to be entered in the input field by default.\nYou cannot set a value that exceeds the \"Maximum number of bytes\" or a value that does not match the \"Regular expression\".",
        'FTE01122' : "When registering from the created menu, set the value to be entered in the input field by default.\nYou cannot set a Values outside the range of \"Maximum value\" and \"Minimum value\".",
        'FTE01123' : "When registering from the created menu, set the value to be entered in the input field by default.\nYou cannot set a Values outside the range of \"Maximum value\" and \"Minimum value\" and \"Digit number\".",
        'FTE01124' : "When registering from the created menu, set the value to be entered in the input field by default.",
        'FTE01125' : "When registering from the created menu, set the value to be entered in the input field by default.\nYou cannot set a value that exceeds the \"Maximum number of bytes\".",
        'FTE01126' : "When registering from the created menu, Set the value selected by default.",
        'FTE01127' : "To make it a required item, check the check box.",
        'FTE01128' : "To make it a unique item, check the check box.",
        'FTE01129' : "Enter the description that will be displayed when users hover mouse cursor over the item name.\nThe maximum size is 1024 bytes.",
        'FTE01130' : "Enter the remarks column.\nThe maximum size is 4000 bytes.",
        'FTE01131' : "Please Wait... Loading",
        'FTE01132' : "Failed to get the Default value",
        'FTE01133' : "Exchange ID has failed",
        'FTE01134' : "Date/time",
        'FTE01135' : "Date",
        'FTE01136' : "Do you want to create the  Menu ?\n*If a menu with the same menu name or a menu the same 'Menu definition information' ID already exists, the existing data will be deleted and overwritten by the new data.\\nIf you need to retain the existing data, select 'Cancel' and perform a backup.",
        'FTE01137' : "Do you want to perform menu initialization? \n*The data you have already entered in this menu will be deleted. \nIf you need the entered data, please select \"Cancel\" to back up the data.",
        'FTE01138' : "Do you want to perform an edit of the menu? \n*The data entered in the existing item will remain, but if you had deleted the existing item, the data entered in that item will be deleted. \nIf you change the \"Regular expression\" in an existing item, it may cause inconsistency with the existing data. \nAlso, if the newly added item was set as \"Required\" and \"Unique constraint\", empty data will be entered in the required field, which may cause data inconsistency. \nIf you need to modify the data, please select \"Cancel\".",
        'FTE01139' : "Failed to get the reference item.",
        'FTE01140' : "Menu creation was accepted.\nPlease click the Menu creation history button and check the creation status.\nUUID:",
        'FTE01141' : "Validation errors occurred.",
        'FTE01142' : "No items.",
        'FTE01143' : "Delete",
        'FTE01144' : "Add a pattern",
        'FTE01145' : "No patterns.",
        'FTE01146' : "Item name",
        'FTE01147' : "Item name(rest)",
        'FTE01148' : "Full screen",
        'FTE01149' : "Exit full screen",
        
        // Conductor
        'FTE02001' : "Conductor instance id is not yet set.",
        'FTE02002' : "Enter the Conductor instance ID and click the Work Confirm button, or",
        'FTE02003' : "Conductor list",
        'FTE02004' : " click the Details button on the page.",
        'FTE02005' : "Select",
        'FTE02006' : "Register",
        'FTE02007' : "Reset",
        'FTE02008' : "Edit",
        'FTE02009' : "Execution",
        'FTE02010' : "Diversion",
        'FTE02011' : "New",
        'FTE02012' : "Update",
        'FTE02013' : "Reload",
        'FTE02014' : "Cancel",
        'FTE02015' : "Operation check",
        'FTE02016' : "Schedule cancellation",
        'FTE02017' : "Emergency stop",
        'FTE02018' : "Conductor instance ID",
        'FTE02019' : "Full screen",
        'FTE02020' : "Full screen release",
        'FTE02021' : "JSON save",
        'FTE02022' : "JSON read",
        'FTE02023' : "Operation cancel",
        'FTE02024' : "Operation redo",
        'FTE02025' : "Selected node deletion",
        'FTE02026' : "The entire display",
        'FTE02027' : "Log",
        'FTE02028' : "failed to read.",
        'FTE02029' : "Failed to execute operation.",
        'FTE02030' : "Do you want to register?",
        'FTE02031' : "Registration completed.",
        'FTE02032' : "Failed to register",
        'FTE02033' : "Loading completed.",
        'FTE02034' : "Do you want to reset it?",
        'FTE02035' : "Reset.",
        'FTE02036' : "Do you want to divert?",
        'FTE02037' : "Diversion.",
        'FTE02038' : "Do you want to update?",
        'FTE02039' : "Updated.",
        'FTE02040' : "Update failed.",
        'FTE02041' : "Are you sure you want to refresh?",
        'FTE02042' : "Reloaded.",
        'FTE02043' : "Cancel a reservation?",
        'FTE02044' : "Do you want an emergency stop?",
        'FTE02045' : "Normal end",
        'FTE02046' : "Abend",
        'FTE02047' : "Unexpected error",
        'FTE02048' : "Emergency stop",
        'FTE02049' : "Preparation error",
        'FTE02050' : "Skip end",
        'FTE02051' : "Warning end",
        'FTE02052' : "Other",
        'FTE02053' : "There is a maximum of 6 conditional branches.",
        'FTE02054' : "There is no connection destination.",
        'FTE02055' : "Cannot be merged.",
        'FTE02056' : "Normal",
        'FTE02057' : "Abnormal",
        'FTE02058' : "Warning",
        'FTE02059' : "Filter settings",
        'FTE02060' : "Do not use regular expressions",
        'FTE02061' : "Use regular expressions",
        'FTE02062' : "Orchestrator Selection",
        'FTE02063' : "Setting",
        'FTE02064' : "Cancel",
        'FTE02065' : "Remarks",
        'FTE02066' : "Enter description (Maximum length) 4000 bytes",
        'FTE02067' : "Conductor Information",
        'FTE02068' : "Enter Conductor name.(Maximum length) 255 bytes",
        'FTE02069' : "Name",
        'FTE02070' : "Update Date",
        'FTE02071' : "Movement Information",
        'FTE02072' : "ID",
        'FTE02073' : "Skip",
        'FTE02074' : "Individual operation",
        'FTE02075' : "Operation selection",
        'FTE02076' : "Clear",
        'FTE02077' : "Exit Status",
        'FTE02078' : "Parallel branch setting",
        'FTE02079' : "Branch addition",
        'FTE02080' : "Branch deletion",
        'FTE02081' : "Parallel merge setting",
        'FTE02082' : "Merge addition",
        'FTE02083' : "Merge deletion",
        'FTE02084' : "Conditional branch setting",
        'FTE02085' : "Branch addition",
        'FTE02086' : "Branch deletion",
        'FTE02087' : "Conductor call information",
        'FTE02088' : "Skip",
        'FTE02089' : "Call conductor",
        'FTE02090' : "Conductor selection",
        'FTE02091' : "Clear",
        'FTE02092' : "Individual operation",
        'FTE02093' : "Operation selection",
        'FTE02094' : "Clear",
        'FTE02095' : "Status file branch setting",
        'FTE02096' : "Condition addition",
        'FTE02097' : "Condition deletion",
        'FTE02098' : "Node alignment",
        'FTE02099' : "Alignment",
        'FTE02100' : "Align horizontally to the left",
        'FTE02101' : "Align horizontally to the center",
        'FTE02102' : "Align horizontally to the right",
        'FTE02103' : "Align vertically to the top",
        'FTE02104' : "Align vertically to the center",
        'FTE02105' : "Align vertically to the bottom",
        'FTE02106' : "Equal space",
        'FTE02107' : "Distribute evenly vertically",
        'FTE02108' : "Distribute evenly horizontally",
        'FTE02109' : "Conductor instance information",
        'FTE02110' : "Status",
        'FTE02111' : "Start time",
        'FTE02112' : "End time",
        'FTE02113' : "Execution user",
        'FTE02114' : "Scheduled date/time",
        'FTE02115' : "Emergency stop",
        'FTE02116' : "Operation",
        'FTE02117' : "Node instance information",
        'FTE02118' : "Type",
        'FTE02119' : "Node ID",
        'FTE02120' : "St file",
        'FTE02121' : "Start date/time",
        'FTE02122' : "End date/time",
        'FTE02123' : "Operation status check",
        'FTE02124' : "Confirmation",
        'FTE02125' : "Individual operation",
        'FTE02126' : "Conductor data is incorrect.",
        'FTE02127' : "Failed to read.",
        'FTE02128' : "Check execution status",
        'FTE02129' : "Reservation cancellation failed.",
        'FTE02130' : "Emergency stop failed.",
        'FTE02131' : "Are you sure you want to cancel the suspension?",
        'FTE02132' : "Failed to release pause.",
        'FTE02133' : "Edit mode",
        'FTE02134' : "View mode",
        'FTE02135' : "Update mode",
        'FTE02136' : "Confirmation mode",
        'FTE02137' : "You cannot delete a connected branch.",
        'FTE02138' : "There are at least two branches.",
        'FTE02139' : "Looped connections are not possible.",
        'FTE02140' : "Conductor execution error.",
        'FTE02141' : "Conductor execution log.",
        'FTE02142' : "Menu",
        'FTE02143' : "Auto-input",
        'FTE02144' : "Mouse wheel",
        'FTE02145' : "Enlargement / Reduction the screen",
        'FTE02146' : "Mouse right drag",
        'FTE02147' : "Screen movement",
        'FTE02148' : "Mouse left click",
        'FTE02149' : "Node select / Delete connection line",
        'FTE02150' : "Mouse left drag",
        'FTE02151' : "Node move / Node multiple select",
        'FTE02152' : "Node select",
        'FTE02153' : "Node select / Check execution status",
        'FTE02154' : "Mouse operation",
        'FTE02155' : "Keyboard operation",
        'FTE02156' : "Select all nodes",
        'FTE02157' : "Delete selected node",
        'FTE02158' : "Move selected node",
        'FTE02159' : "Branch addition/deletion of the selected branch node",
        'FTE02160' : "Arrow key",
        'FTE02161' : "Now loading",
        'FTE02162' : "Data in the process of being edited has been read from local storage.",
        
        // Execution
        'FTE05001' : "Execution No.",
        'FTE05002' : "Check execution status",
        'FTE05003' : "Schedule cancellation",
        'FTE05004' : "Emergency stop",
        'FTE05005' : "Execution No. has not been set.",
        'FTE05006' : "Enter the execution No. and click the check execution status button, or",
        'FTE05007' : "Work management page",
        'FTE05008' : "Please press the Details button",
        'FTE05009' : "Operation status",
        'FTE05010' : "Execution type",
        'FTE05011' : "Status",
        'FTE05012' : "Execution engine",
        'FTE05013' : "Caller conductor",
        'FTE05014' : "Execution user",
        'FTE05015' : "Populated data",
        'FTE05016' : "Result data",
        'FTE05017' : "Operation status",
        'FTE05018' : "Scheduled date/time",
        'FTE05019' : "Start date/time",
        'FTE05020' : "End date/time",
        'FTE05021' : "Operation",
        'FTE05022' : "ID",
        'FTE05023' : "Name",
        'FTE05024' : "Confirmation of hosts to be worked on",
        'FTE05025' : "Confirmation of assignment value",
        'FTE05026' : "Movement",
        'FTE05027' : "Delay timer (minute)",
        'FTE05028' : "Movement detail confirmation",
        'FTE05029' : "Dedicated information for ansible",
        'FTE05030' : "Host specific format",
        'FTE05031' : "WinRM connection",
        'FTE05032' : "ansible.cfg",
        'FTE05033' : "Ansible Core dedicated information",
        'FTE05034' : "virtualenv",
        'FTE05035' : "Ansible Automation Controller dedicated information",
        'FTE05036' : "Execution environment",
        
        // UI common
        'FTE10001': 'Main menu',
        'FTE10002': 'Menu group',
        'FTE10003': 'Favorite',
        'FTE10004': 'History',
        'FTE10005': 'Switch workspace',
        'FTE10006': 'Role list',
        'FTE10007': 'Menu search',
        'FTE10008': 'List',
        'FTE10009': 'Trace history',
        'FTE10010': 'Download all and edit file uploads',
        'FTE10011': 'Download all (Excel)',
        'FTE10012': 'Download the list of registered items in an Excel sheet.',
        'FTE10013': 'Download all (JSON)',
        'FTE10014': 'Download the list of registered items in an JSON.',
        'FTE10015': 'Download for new registration (Excel)',
        'FTE10016': 'Download the Excel sheet for new registrations.',
        'FTE10017': 'Bulk registration (Excel)',
        'FTE10018': 'Excel sheets downloaded from "Download all" and "Download for new registration" can be edited and uploaded from here to be added or edited in batches.',
        'FTE10019': 'Bulk registration (JSON)',
        'FTE10020': 'JSON files can be added and edited in batches by uploading them here.',
        'FTE10021': 'The JSON format is incorrect.',
        'FTE10023': 'Download all trace history(Excel)',
        'FTE10024': 'Download an Excel sheet with the entire history of changes to the list of registered items.',
        'FTE10025': 'Bulk registration start',
        'FTE10026': 'Cancel',
        'FTE10027': 'File name',
        'FTE10028': 'File size',
        'FTE10029': 'Number',
        'FTE10030': 'System error.',
        'FTE10031': 'Excel sheets downloaded from "Download all" can be edited and uploaded from here to be edited in batches.',
        'FTE10032': 'JSON files can be added and edited in batches by uploading them here.',
        'FTE10033': 'Version Check',
        'FTE10034': 'Sign out',
        'FTE10035': 'Installed driver',
        'FTE10036': ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        'FTE10037': ['January','February','March','April','May','June','July','August','September','October','November','December'],
        'FTE10038': 'Apply',
        'FTE10039': 'Current',
        'FTE10040': 'Clear',
        'FTE10041': 'Delete Entered Passwords',
        'FTE10042': 'Registration successful',
        'FTE10043': 'Close',
        'FTE10044': 'Error column',
        'FTE10045': 'Error details',
        'FTE10046': 'Registration Failed',
        'FTE10047': 'Error Log JSON Download',
        'FTE10048': 'Decision to select',
        'FTE10049': 'Operation',
        'FTE10050': 'Operation selection',
        'FTE10051': 'Specify the scheduled date/time in (yyyy/MM/dd HH:mm:ss).<br>Immediately execute when blank.',
        'FTE10052': 'Schedule',
        'FTE10053': 'Log search',
        'FTE10054': 'Display only corresponding lines',
        'FTE10055': 'Name',
        'FTE10056': ' setting',
        'FTE10057': 'Required',
        'FTE10058': 'OK',
        'FTE10059': 'Confirmation',
    };

    return message;

}());
