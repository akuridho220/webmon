import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";

const DropdownProgres = ({title}) => {
    return (
        <Dropdown className="bg-putih-100 text-primary-600 ml-32 rounded-lg">
            <DropdownTrigger className="w-full p-1 rounded-md">
                <Button 
                    variant="light" 
                    >
                    {title}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="">
                <DropdownItem key="progres-wilayah" className="w-full">
                    <Link href="/riset/progres/progres-wilayah">
                        Progres Wilayah
                    </Link>
                </DropdownItem>
                <DropdownItem key="progres-pertim" className="w-full">
                    <Link href="/riset/progres/progres-pertim">
                        Progres Per Tim
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownProgres;