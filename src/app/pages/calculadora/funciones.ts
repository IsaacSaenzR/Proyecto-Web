const apiUrl = 'https://www.carboninterface.com/api/v1/estimates';
const apiKey2 = '8yIXiFDDgAyQmNBOqDG3nw';
const apiKey = 'Pxf6uWVRsiFtjEXyCZO1Q';

export async function calcularVuelos(aeropuertoSal: string, aeropuertoLle: string) {
    let respApi: any;
    
    const body = {
        type: 'flight',
        passengers: 1,
        legs: [
            {
                departure_airport: aeropuertoSal, destination_airport: aeropuertoLle 
            }
        ]
    };

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function calcularElectricidad(electricidad:number) {
    let respApi: any;
    
    const body = {
        "type": "electricity",
        "electricity_unit": "kwh",
        "electricity_value": electricidad,
        "country": "us",
    };

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function calcularEnvio(peso:number, metodo:string, recorrido:number) {
    let respApi: any;
    
    const body = {
        "type": "shipping",
        "weight_value": peso,
        "weight_unit": "g",
        "distance_value": recorrido,
        "distance_unit": "km",
        "transport_method": metodo
    };

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function MarcaVehiculos() {
    let respApi: any;

    await fetch(`https://www.carboninterface.com/api/v1/vehicle_makes`, {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        }
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function ModeloVehiculos(id:string) {
    let respApi: any;

    await fetch(`https://www.carboninterface.com/api/v1/vehicle_makes/${id}/vehicle_models`, {
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        }
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function calcularVehiculo(distancia:number, id:string) {
    let respApi: any;
    
    const body = {
        "type": "vehicle",
        "distance_unit": "km",
        "distance_value": distancia,
        "vehicle_model_id": id
    };

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}

export async function calcularGas(litros:number) {
    let respApi: any;
    
    const body = {
        "type": "fuel_combustion",
        "fuel_source_type": "ng",
        "fuel_source_unit": "btu",
        "fuel_source_value": litros*0.096037565403
    };

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        respApi = res;
    });

    return respApi.json();
}