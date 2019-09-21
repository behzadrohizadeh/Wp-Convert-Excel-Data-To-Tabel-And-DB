<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf26cc79f18cfc265e1f950dc33ece03e
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'Ellumilel\\' => 10,
        ),
        'A' => 
        array (
            'Asan\\PHPExcel\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Ellumilel\\' => 
        array (
            0 => __DIR__ . '/..' . '/ellumilel/php-excel-writer/src',
        ),
        'Asan\\PHPExcel\\' => 
        array (
            0 => __DIR__ . '/..' . '/asan/phpexcel/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf26cc79f18cfc265e1f950dc33ece03e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf26cc79f18cfc265e1f950dc33ece03e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}