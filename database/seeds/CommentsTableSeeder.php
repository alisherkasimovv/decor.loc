<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            'id'                    => 1,
            'client'                => 'Saidbek Arslonov',
            'text'               => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta accusantium sint minus perspiciatis odio dolorem neque ad repellat modi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, deleniti.',
        ]);
        DB::table('comments')->insert([
            'id'                    => 2,
            'client'                => 'Sardor Abdullayev',
            'text'               => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta accusantium sint minus perspiciatis odio dolorem neque ad repellat modi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, deleniti.',
        ]);
        DB::table('comments')->insert([
            'id'                    => 3,
            'client'                => 'Saida Nurmatova',
            'text'               => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta accusantium sint minus perspiciatis odio dolorem neque ad repellat modi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, deleniti.',
        ]);
    }
}
