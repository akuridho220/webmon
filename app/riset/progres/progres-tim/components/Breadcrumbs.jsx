import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

export default function Breadcrumb() {
    return(
        <Breadcrumbs className="w-full bg-primary-400">
            <BreadcrumbItem>Riset</BreadcrumbItem>
            <BreadcrumbItem>Progres Tim</BreadcrumbItem>
        </Breadcrumbs>
    );
}