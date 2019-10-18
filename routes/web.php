<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);
Route::get('/about-us', ['as' => 'about-us', 'uses' => 'HomeController@aboutUs']);
Route::get('/contacts', ['as' => 'contacts', 'uses' => 'HomeController@contacts']);
Route::get('/categories', ['as'=> 'categories', 'uses' => 'HomeController@categories']);
Route::get('/categories/{slug}', ['as' => 'category', 'uses' => 'HomeController@category']);

Route::group([
    'prefix'=>'admin',
    'middleware'=>'auth',
    'namespace'=>'Admin'], function()
    {
        Route::resource('/credentials', 'CredentialController');
        Route::resource('/addresses', 'AddressesController');
        Route::resource('/categories', 'CategoriesController');
        Route::resource('/members', 'MembersController');
        Route::resource('/comments', 'CommentsController');
    }
);

Auth::routes();
