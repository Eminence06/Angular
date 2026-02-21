import { Routes } from '@angular/router';
import { Admin } from './component/admin/admin';
import { ControlFlow } from './component/control-flow/control-flow';
import { DataBinding } from './component/data-binding/data-binding';
import { signal } from '@angular/core';
import { SignalEx } from './component/signal-ex/signal-ex';
import { User } from './component/user/user';
import { AttDirective } from './component/att-directive/att-directive';
import { GetApi } from './component/get-api/get-api';

export const routes: Routes = [
    {
        path: "admin",
        component: Admin
    },
    {
        path: "control-flow",
        component: ControlFlow
    },
    {
        path: "data-binding",
        component: DataBinding
    },
    {
        path: "signal-ex",
        component: SignalEx
    },
    {
        path: "User",
        component: User
    },
    {
        path: "Attr-dir",
        component: AttDirective
    },
    {
        path: "GetApi",
        component:GetApi
    }
];
