<?php
    Class Departamento{
        public $direccion;
        public $cantidad_pisos;
        public $cantidad_departamentos;
        private $encargados;

        public function __construct($direccion, $cantidad_pisos, $cantidad_departamentos, $encargado){
            $this->direccion = $direccion;
            $this->cantidad_pisos = $cantidad_pisos;
            $this->cantidad_departamentos = $cantidad_departamentos;
            $this->encargados = [$encargado];
        }

        public function despedir_encargado($encargado){
            //verificar que el encargado esté en la lista
            if($encargados[$encargado].obtener_faltas() <= 42){
                //pagar indemnizacion
            }
            //eliminar al encargado de la lista
        }

        public function contratar_encargado($encargado){
            //verificar que el encargado no esté en la lista
            //agregar al encargado a la lista
        }
    }
    Class Empleado{
        private $nombre;
        private $apellido;
        private $dni;
        private $faltas;

        public function __construct($nombre, $apellido, $dni){
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->dni = $dni;
            $this->faltas = 0;
        }

        public function imprimir(){
            return this.nombre + " " + this.apellido+ " " + this.dni;
        }

        public function obtener_faltas(){
            return this.faltas;
        }

        public function agregar_falta(){
            this.faltas += 1;
        }
    }

    $t1 = new Empleado("Pepe", "Fulanito", "11111111");
    echo($t1.imprimir);

php?>