import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

  

function Trocas() {
    return(
        <div className='pagina-troca'>
           <Cabecalho/>

            <hr></hr>

        <div className='trocas-s1'>
            <h1>Trocas e Devoluções</h1>
        </div>    

        <div className='trocas-s2'>
            <h4>
            Política de Trocas e Devoluções - Joias King 
            </h4>
            <h5>
            Na Joias King, valorizamos a sua satisfação e estamos empenhados em oferecer produtos de alta qualidade. Caso você não esteja completamente satisfeito(a) com a sua compra, nossa política de trocas e devoluções foi elaborada para proporcionar a melhor experiência possível.
            Trocas:
            </h5>
            <p>
             1. Trocas por Defeito de Fabricação: Caso o produto apresente defeito de fabricação, você poderá solicitar a troca em até 30 dias a partir da data de recebimento. Para isso, entre em contato com nosso serviço de atendimento ao cliente através do [e-mail/número de telefone] fornecido no seu comprovante de compra. Após a avaliação do defeito, providenciaremos a substituição do item por um novo ou um produto similar, conforme disponibilidade em estoque.
            </p>

            <p>2. Trocas por Insatisfação: Se, por algum motivo, você não estiver satisfeito(a) com a sua compra, é possível solicitar a troca por um produto de igual valor ou pagar a diferença por um item mais caro. Para isso, o produto deverá estar em perfeito estado, na embalagem original e sem sinais de uso. O prazo para solicitar a troca por insatisfação é de até 15 dias após o recebimento do pedido.</p>

            <h5>Devoluções:</h5>

            <p>1. Devolução por Defeito de Fabricação: Nos comprometemos em oferecer produtos de alta qualidade, mas caso o item adquirido apresente um defeito de fabricação, você poderá solicitar a devolução do valor pago. Entre em contato com nosso serviço de atendimento ao cliente e siga as instruções para enviar o produto de volta. Após a avaliação do defeito, o valor integral da compra será reembolsado, incluindo os custos de frete.</p>
            <p>2. Devolução por Arrependimento: Se você mudar de ideia após a compra, poderá solicitar a devolução do produto em até 7 dias corridos após o recebimento. Nesse caso, o produto deve estar sem sinais de uso, na embalagem original e acompanhado do comprovante de compra. Os custos de frete para a devolução ficarão a cargo do cliente, e após a análise do produto, o valor será reembolsado integralmente.</p>

            <h5>Condições Gerais:</h5>

            <p>°A [Nome da Sua Marca] reserva o direito de avaliar o estado do produto antes de proceder com a troca ou reembolso.</p>
            <p>°A troca ou devolução somente será efetuada após o recebimento e análise do produto em nosso centro de distribuição.</p>
            <p>°Não nos responsabilizamos por danos causados pelo mau uso, queda, acidentes ou alterações feitas após o recebimento do produto.</p>
            <p>°Em caso de dúvidas ou para iniciar um processo de troca ou devolução, entre em contato com nosso serviço de atendimento ao cliente através do [e-mail/número de telefone].</p>


            <h6>Ao efetuar uma compra em nosso site, você concorda com os termos e condições acima mencionados em relação às trocas e devoluções.</h6>

            <h6>Agradecemos por escolher a [Nome da Sua Mpara suas joias e acessórios]. Estamos aqui para proporcionar uma experiência de compra excepcional e garantir sua total satisfação.</h6>


        </div>
          

           
        <Rodape /> 
        </div>
    )
}

export default Trocas;