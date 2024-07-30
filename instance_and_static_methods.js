function teste() {
    console.log('Esse é meu teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //método estático
    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('lg');
