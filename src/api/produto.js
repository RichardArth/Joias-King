import axios from "axios";
import { API_URL } from "../constants";

export async function CadastrarProduto(nome, preco, tipo, detalhes, estoque, tamanho, codigo) {
    try {
      const r = await axios.post(API_URL + '/produto', {
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

export async function EnviarImagem(id, imagem) {
    const formData = new formData();
    formData.append('imagem', imagem);

    const r = await axios.put(API_URL + `/produto/${id}/imagem`, formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    )
    return r.status
}


export async function AlterarProduto(id, nome, preco, tipo, detalhes, estoque, tamanho, codigo) {
  const r = await axios.put(API_URL + `/produto/${id}`, {
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
  const r = await axios.delete(`/produto/${id}`);
  return r.status
}

export async function BuscarID(id) {
  const r = await axios.get(`/produto/${id}`)
  return r.data
}

export function BuscarImagem(imagem) {
  return `${axios.getUri()}/${imagem}`
}