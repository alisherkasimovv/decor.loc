<?php

use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addresses')->insert([
            'id'                    => 1,
            'city'                  => 'Tashkent',
            'address'               => 'G 123',
            'phone'                 => "+998 (45) 123-12-12",
            'email'                 => "decor@decor.uz",
            'main_office'           => 1
        ]);
        DB::table('addresses')->insert([
            'id'                    => 2,
            'city'                  => 'Tashkent',
            'address'               => 'Another street, 23',
            'phone'                 => "+998 (45) 123-12-12",
            'email'                 => "branch@decor.uz",
            'main_office'           => 0
        ]);
        DB::table('addresses')->insert([
            'id'                    => 3,
            'city'                  => 'Samarqand',
            'address'               => 'Different street, 23',
            'phone'                 => "+998 (45) 123-12-12",
            'email'                 => "branch-samarqand@decor.uz",
            'main_office'           => 0
        ]);
    }
}
