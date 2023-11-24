import axios from "axios";
import { API_URL } from "../constants";
const api = axios.create({
  baseURL: API_URL
})


export async function CadastrarProduto(nome, preco, tipo, detalhes, estoque, tamanho, codigo) {
    try {
      const r = await api.post('/produto', {
        nome: nome,
        preco: preco,
        tipo: tipo,
        detalhes: detalhes,
        estoque: estoque,
        tamanho: tamanho,
        codigo: codigo
      });
      return r.data;
    } catch (err) {
      throw err;
    }
  }
  

  export async function CarregarProdutos() {
    const r = await api.get('/produtos')
    return r.data
  }

  export async function ConsultarProduto(nome) {
    const r = await api.get(`/produto/busca?nome=${nome}`)
    return r.data
  }


export async function EnviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('imagem', imagem);

    const r = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    )
    return r.status
}


export async function AlterarProduto(id, nome, preco, tipo, detalhes, estoque, tamanho, codigo) {
  const r = await api.put(`/produto/${id}`, {
    nome: nome,
    preco: preco,
    tipo: tipo,
    detalhes: detalhes,
    estoque: estoque,
    tamanho: tamanho,
    codigo: codigo
  })

  return r.data
}


export async function RemoverProduto(id) {
  const r = await api.delete(`/produto/${id}`);
  return r.status
}


export async function BuscarID(id) {
  const r = await api.get(`/produto/${id}`)
  return r.data
}


export function BuscarImagem(imagem) {
  return `${api.getUri()}/${imagem}`
}