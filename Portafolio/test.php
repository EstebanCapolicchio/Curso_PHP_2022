<?php
    Class Departamento{
        public $a;
        private $b;

        public function __construct($p1, $p2){
            $this->a = $p1;
            $this->b = $p2;
        }

        public function method1($p1, $p2){
            $aux = $a + $b;
            return $aux;
        }

        private function method2($p1, $p2){
            $aux = $a - $b;
            return $aux;
        }
    }
    Class Empleado{
        public $a;
        private $b;

        public function __construct($p1, $p2){
            $this->a = $p1;
            $this->b = $p2;
        }

        public function method1($p1, $p2){
            $aux = $a + $b;
            return $aux;
        }

        private function method2($p1, $p2){
            $aux = $a - $b;
            return $aux;
        }
    }
php?>