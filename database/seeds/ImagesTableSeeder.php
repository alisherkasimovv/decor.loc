<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->insert([
            'id'                    => 1,
            'url'                   => 'uploads/credentials/thedecor.png',
            'image_type'            => 'App\Credential',
            'image_id'              => 1
        ]);
    }
}
