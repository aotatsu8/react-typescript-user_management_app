import { memo, VFC } from "react";
import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";


export const UserManagement: VFC = memo(() => {
    return (
        <Wrap p={{base: 4, md: 10}}>
            <WrapItem>
                <UserCard
                    imageUrl="https://source.unsplash.com/random"
                    userName="hachi8"
                    fullName="Tatsuya Aoki"
                />
                <UserCard imageUrl="https://source.unsplash.com/random" userName="hachi8" fullName="Tatsuya Aoki" />
            </WrapItem>
        </Wrap>
    )
})