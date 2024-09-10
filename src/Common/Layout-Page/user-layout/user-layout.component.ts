import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet,OverlayPanelModule,CommonModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  MENULIST=[
    {
        "MODULE_CODE": "DASHBOARD",
        "MODULE_DESCRIPTION": "Dashboard",
        "SEQ_NO": "1",
        "ICON": "pi pi-home",
        "IS_SELECTED": false,
        "MENU_TYPE": "",
        "DETAIL": []
    },
    {
      "MODULE_CODE": "MASTERS",
      "MODULE_DESCRIPTION": "Masters",
      "SEQ_NO": "2",
      "ICON": "pi pi-inbox",
      "IS_SELECTED": false,
      "MENU_TYPE": "",
      "DETAIL": [ {
        "MODULE_CODE": "MASTERS",
        "FUNCTION_CODE": "MC001",
        "FUNCTION_DESC": "Client",
        "URL": "/admin/clientpage",
        "SEQ_NO": "1",
        "IS_SELECTED": false,
    },{
      "MODULE_CODE": "MASTERS",
      "FUNCTION_CODE": "MC002",
      "FUNCTION_DESC": "Department",
      "URL": "/",
      "SEQ_NO": "2",
      "IS_SELECTED": false,
  },{
    "MODULE_CODE": "MASTERS",
    "FUNCTION_CODE": "MC003",
    "FUNCTION_DESC": "User ",
    "URL": "/",
    "SEQ_NO": "3",
    "IS_SELECTED": false,
},{
  "MODULE_CODE": "MASTERS",
  "FUNCTION_CODE": "MC004",
  "FUNCTION_DESC": "Role Master",
  "URL": "/",
  "SEQ_NO": "4",
  "IS_SELECTED": false,
},{
  "MODULE_CODE": "MASTERS",
  "FUNCTION_CODE": "MC005",
  "FUNCTION_DESC": "Role Access ",
  "URL": "/",
  "SEQ_NO": "5",
  "IS_SELECTED": false,
},{
"MODULE_CODE": "MASTERS",
"FUNCTION_CODE": "MC006",
"FUNCTION_DESC": "File Type",
"URL": "/",
"SEQ_NO": "6",
"IS_SELECTED": false,
},]
  },
  {
    "MODULE_CODE": "TRANSACTION",
    "MODULE_DESCRIPTION": "Transaction/Files",
    "SEQ_NO": "3",
    "ICON": "pi pi-folder-open",
    "IS_SELECTED": false,
    "MENU_TYPE": "",
    "DETAIL": []
},
{
  "MODULE_CODE": "REPORT",
  "MODULE_DESCRIPTION": "Reports",
  "SEQ_NO": "3",
  "ICON": "pi pi-chart-bar",
  "IS_SELECTED": false,
  "MENU_TYPE": "",
  "DETAIL": []
}
]

}
