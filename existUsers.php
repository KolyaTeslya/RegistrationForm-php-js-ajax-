<?php

class existUsers
{
    public static array $peopleCollection = [

        ['id'=>1, 'email'=>'misha@mail.com', 'name'=>'Misha'],
        ['id'=>2, 'email'=>'kolya@mail.com', 'name'=>'Kolya'],
        ['id'=>3, 'email'=>'dima@mail.com', 'name'=>'Dima'],
        ['id'=>4, 'email'=>'sasha@mail.com', 'name'=>'Sasha']

        ];


    public static function isRegisteredInPeopleCollection(string $whatFind): bool
    {
        foreach (self::$peopleCollection as $value) {
            if ($whatFind == $value['email']) return true;
        }
        return false;
    }

}


