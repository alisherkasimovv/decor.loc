<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id'        => 1,
            'name'      => 'administrator',
            'email'     => 'decor@decor.uz',
            'password'  => Hash::make('password')
        ]);
    }
}
