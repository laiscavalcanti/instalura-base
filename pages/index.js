import React from "react";
import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";
import Modal from "../src/components/commons/Modal";
import  Text  from "../src/components/foundation/Text";
import { Button } from "../src/components/commons/Button";
import { Grid } from "../src/components/layout/Grid";
import { Box } from "../src/components/layout/Box";
import FormCadastro from "../src/components/patterns/FormCadastro";

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
       {(propsDoModal) => (
         
         <FormCadastro
         onClose={() => setModalState(false)}
         propsDoModal={propsDoModal} />
        )}
       
      </Modal>

      <Grid.Container
        marginTop={{
          xs: "32px",
          md: "60px",
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="center"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: "auto",
                  md: "initial",
                }}
                display="block"
                variant="primary.main"
                onClick={() => {
                  setModalState(true);
                }}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <img
                alt="Descrição do projeto"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              />
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
