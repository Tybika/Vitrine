import { useState } from "react"
import { cepAPI } from "~/services/external-apis"

type cep = {
    localidade: string,
    uf: string
}

export function Cep() {
    const [cep, setCep] = useState('')
    const [city, setCity] = useState<cep | null>()

    return (
        <div className="w-full my-2 md:w-1/3 md:m-1 select-none">
            <label>Digite seu CEP (apenas números)</label>
            <div className="flex gap-2 md:items-center">
                <input
                    type="text"
                    maxLength={8}
                    placeholder="00000000"
                    className="border p-0.5 rounded-sm indent-1 onfocus:border-stone-700"
                    onChange={(event) => {
                        let value = event.target.value
                        if (value.length <= 8) {
                            if (!isNaN(parseInt(value))) {
                                setCep(value)
                            }
                            if (value.length != 8) {
                                setCity(null)
                            }
                        }
                    }
                    }
                />

                <button
                    disabled={cep.length !== 8}
                    onClick={() => {
                        cepAPI.get(`/${cep}/json/`).then((response) => {
                            let data = response.data
                            if (data.hasOwnProperty("localidade")) {
                                setCity(data)
                            }
                            else {
                                setCity(null)
                            }

                        })
                    }}
                    className="w-1/3 md:w-auto py-1 px-6 bg-stone-800 text-white rounded-md m-1 
                            disabled:bg-transparent disabled:text-stone-500 disabled:border"
                >
                    Buscar
                </button>

                <p className="flex-1 md:ml-2 font-medium">
                    {city != null && cep.length == 8 ?
                        city.localidade + "/" + city.uf : null
                    }
                </p>
            </div>
            <p className="text-sm text-red-800">
                {cep.length !== 8 && cep.length > 0 ?
                    "*Dígitos insuficientes, por favor, insira uma entrada válida." : null
                }
            </p>
        </div>
    )
}