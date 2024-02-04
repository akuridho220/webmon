import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";

const DropdownDaftar = ({title}) => {
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
                <DropdownItem key="daftar-listing">
                    <Link href="/riset/daftar/daftar-listing">
                        Daftar Listing
                    </Link>
                </DropdownItem>
                <DropdownItem key="daftar-sampel">
                    <Link href="/riset/daftar/daftar-sampel">
                        Daftar Sampel
                    </Link></DropdownItem>
                <DropdownItem key="daftar-pertim">
                <Link href="/riset/daftar/daftar-pertim">
                        Daftar Per Tim
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownDaftar;