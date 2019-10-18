<?php

use Illuminate\Database\Seeder;

class CredentialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('credentials')->insert([
            'id'                    => 1,
            'name'                  => 'TheDecor',
            'brief'                 => 'Sample text',
            'info'                  => 'Bizning firma 2010 yildan boshlab yurtimizaga va yurtdoshlarimizaga hizmat korsatib keladi. Biz wu yillar davomida Fasadniy Gips, Fibra beton, quyma travertin va Arxitektura dizayin xizmatlarimizani yurtimizaga va yurtdoshlamizaga xizmat korsatib kelamiza.<br>Biz 2010 yildan buyon Uzbekiston bozorida yuqori darajadagi maxsulotlarimizani ulashib kelmoqdamiz',
            'facebook'              => 'facebook.com',
            'telegram'              => 'telegram.me',
            'instagram'             => 'instagram.com'
        ]);
    }
}
