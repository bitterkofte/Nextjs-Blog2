import styled from "styled-components";
import Layout from "../components/Layout";
import Image from 'next/image'
import Apics from '../images/cactus.png'

const Butun = styled.div`
display: flex;
gap: 20px;
`



export default () => (
  <Layout title="Hakkımda">
    <Butun>
      <div>
        <p>
        Nam lobortis eget nibh sit amet imperdiet. Vivamus commodo leo ex, non placerat tortor mollis sit amet. Donec lacinia viverra nisl vel pellentesque. Aenean sed eleifend enim. Mauris elementum blandit augue in venenatis. Nam in nisl ornare, dapibus augue nec, mattis risus. Vivamus id magna euismod, placerat lectus sit amet, aliquet dui. Cras arcu lectus, aliquam vel mollis eget, scelerisque in est.
        </p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
        <p>
        Nam lobortis eget nibh sit amet imperdiet. Vivamus commodo leo ex, non placerat tortor mollis sit amet. Donec lacinia viverra nisl vel pellentesque. Aenean sed eleifend enim. Mauris elementum blandit augue in venenatis. Nam in nisl ornare, dapibus augue nec, mattis risus. Vivamus id magna euismod, placerat lectus sit amet, aliquet dui. Cras arcu lectus, aliquam vel mollis eget, scelerisque in est.
        </p>
        
      </div>
      <Image
        src={Apics}
        // alt="Picture of the author"
        width={235}
        height={390}
      />
    </Butun>
    
  </Layout>
);