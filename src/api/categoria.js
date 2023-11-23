import axios from "axios";
import { API_URL } from "../constants";
const api = axios.create({
  baseURL: API_URL
})

export async function CarregarAliancas() {
    const r = await api.get('/aliancas')
    return r.data
  }

  export async function CarregarPets() {
    const r = await api.get('/pets')
    return r.data
  }

  export async function CarregarColares() {
    const r = await api.get('/colares')
    return r.data
  }

  export async function CarregarBrincos() {
    const r = await api.get('/brincos')
    return r.data
  }

  export async function CarregarAneis() {
    const r = await api.get('/aneis')
    return r.data
  }

  export async function CarregarNamorados() {
    const r = await api.get('/namorados')
    return r.data
  }