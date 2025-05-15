class Hotel {
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    constructor(id, idHotel, nomeDoResponsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = nomeDoResponsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

// Função para cadastrar hotel
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel");
    let categoria = parseInt(prompt("Digite a categoria do hotel"));
    let endereco = prompt("Digite o endereço do hotel");
    let telefone = prompt("Digite o telefone do hotel");
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    hoteis.push(hotel);
    idHotel++;
    console.log("Hotel cadastrado com sucesso!");
}

// Função para cadastrar reserva
function CadastrarReserva() {
    let hotelId;
    let existe = false;

    do {
        hotelId = parseInt(prompt("Digite o id do hotel"));
        existe = hoteis.some(hotel => hotel.Id === hotelId);
        if (!existe) {
            alert("Id do hotel não cadastrado!");
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável");
    let diaEntrada = parseInt(prompt("Digite o dia da entrada"));
    let diaSaida;

    do {
        diaSaida = parseInt(prompt("Digite o dia da saída"));
        if (diaSaida < diaEntrada) {
            alert("O dia de saída deve ser maior que o dia de entrada");
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, hotelId, nome, diaEntrada, diaSaida);
    reservas.push(reserva);
    idReserva++;
    console.log("Reserva cadastrada com sucesso!");
}

// Função para procurar reservas por hotel
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let hotel = hoteis.find(h => h.Id === idHotel);
            console.log("Hotel:", hotel?.Nome || "Desconhecido");
            console.log("Responsável:", reserva.Responsavel);
            console.log("Dia de entrada:", reserva.DiaEntrada);
            console.log("Dia de saída:", reserva.DiaSaida);
        }
    });
}

// Função para procurar hotel por reserva
function ProcurarHotelPelaReserva(idReserva) {
    let reserva = reservas.find(r => r.Id === idReserva);
    if (reserva) {
        let hotel = hoteis.find(h => h.Id === reserva.IdHotel);
        console.log("Hotel:", hotel?.Nome || "Desconhecido");
        console.log("Endereço:", hotel?.Endereco || "Desconhecido");
        console.log("Dia de entrada:", reserva.DiaEntrada);
        console.log("Dia de saída:", reserva.DiaSaida);
    } else {
        console.log("Reserva não encontrada.");
    }
}

// Função para procurar reserva por nome do responsável
function ProcurarReservaPeloNome(nome) {
    reservas.forEach(reserva => {
        if (reserva.Responsavel.toLowerCase() === nome.toLowerCase()) {
            let hotel = hoteis.find(h => h.Id === reserva.IdHotel);
            console.log("ID da Reserva:", reserva.Id);
            console.log("Hotel:", hotel?.Nome || "Desconhecido");
        }
    });
}

// Função para procurar hotéis por categoria
function ProcurarHotelPelaCategoria(categoria) {
    let encontrados = hoteis.filter(hotel => hotel.Categoria === categoria);
    if (encontrados.length > 0) {
        console.log("Hotéis encontrados:");
        encontrados.forEach(h => console.log(h.Nome));
    } else {
        console.log("Nenhum hotel encontrado com essa categoria.");
    }
}

// Função para atualizar telefone do hotel
function AtualizarTelefone(idHotel, telefone) {
    let hotel = hoteis.find(h => h.Id === idHotel);
    if (hotel) {
        hotel.Telefone = telefone;
        console.log("Telefone atualizado com sucesso!");
    } else {
        console.log("Hotel não encontrado.");
    }
}

// Loop principal
let continuar = true;
do {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Cadastrar Hotel\n" +
        "2 - Cadastrar Reserva\n" +
        "3 - Procurar reserva por hotel\n" +
        "4 - Procurar hotel por reserva\n" +
        "5 - Procurar reserva por responsável\n" +
        "6 - Procurar hotéis por categoria\n" +
        "7 - Atualizar telefone do hotel\n" +
        "8 - Encerrar o programa"
    );

    switch (opcao) {
        case "1":
            CadastrarHotel();
            break;
        case "2":
            CadastrarReserva();
            break;
        case "3":
            let idHotelBusca = parseInt(prompt("Digite o ID do hotel:"));
            ProcurarReservasPeloHotel(idHotelBusca);
            break;
        case "4":
            let idReservaBusca = parseInt(prompt("Digite o ID da reserva:"));
            ProcurarHotelPelaReserva(idReservaBusca);
            break;
        case "5":
            let nomeResponsavel = prompt("Digite o nome do responsável:");
            ProcurarReservaPeloNome(nomeResponsavel);
            break;
        case "6":
            let categoria = parseInt(prompt("Digite a categoria:"));
            ProcurarHotelPelaCategoria(categoria);
            break;
        case "7":
            let idHotelAlterar = parseInt(prompt("Digite o ID do hotel:"));
            let novoTelefone = prompt("Digite o novo telefone:");
            AtualizarTelefone(idHotelAlterar, novoTelefone);
            break;
        case "8":
            console.log("Programa encerrado.");
            continuar = false;
            break;
        default:
            console.log("Opção inválida.");
    }

} while (continuar);
