import React from "react";
import styled, { css } from "styled-components";
import { Lottie } from "@crello/react-lottie";
import errorAnimation from "./animations/error.json";
import successAnimation from "./animations/success.json";
import { Grid } from "../../layout/Grid";
import { Box } from "../../layout/Box";
import { Button } from "../../commons/Button";
import Text from "../../foundation/Text";
import TextField from "../../forms/TextField";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

const CloseButton = styled(CloseOutline)`
  width: 50px;
  height: 50px;
  cursor: pointer;

  ${breakpointsMedia({
    md: css`
      margin-right: 1rem;
    `,
  })}
`;

const formStates = {
  DONE: "DONE",
  ERROR: "ERROR",
  DEFAULT: "DEFAULT",
};
function FormContent() {
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT
  );
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    name: " ",
    email: " ",
    message: " ",
  });

  function setValue(name, value) {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  const isFormInvalid =
    userInfo.name.length === 0 ||
    userInfo.email.length === 0 ||
    userInfo.message.length === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setIsFormSubmited(true);

        if (isFormInvalid) {
          return false;
        }

        const userDTO = {
          name: userInfo.name,
          email: userInfo.email,
          message: userInfo.message,
        };

        return fetch(
          "https://contact-form-api-jamstack.herokuapp.com/message",
          {
            method: "POST",
            headers: {
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
              'Content-Type' : 'application/json'
             },
            body: JSON.stringify(userDTO),
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            throw new Error(
              "ERROU!!!! Não foi possível completar sua chamada, tente novamente mais tarde, tu tu tu..."
            );
          })
          .then((responseConverted) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(responseConverted);
          })
          .catch((err) => {
            setSubmissionStatus(formStates.ERROR);
            // Fala de serviços como o Sentry
            // https://sentry.io/welcome/
            // eslint-disable-next-line no-console
            console.error(err);
          })
          .finally(() => {
            setTimeout(() => {
              setSubmissionStatus(formStates.DEFAULT);
              setIsFormSubmited(false);
            }, 3 * 1000);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está rolando no bairro, complete
        seu cadastro agora!
      </Text>

      <TextField
        placeholder="Nome"
        name="name"
        value={userInfo.name}
        onChange={(event) => setValue("name", event.target.value)}
      />
      <TextField
        placeholder="Email"
        name="email"
        value={userInfo.email}
        onChange={(event) => setValue("email", event.target.value)}
      />
      <TextField
        placeholder="Mensagem"
        name="message"
        value={userInfo.message}
        onChange={(event) => setValue("message", event.target.value)}
      />

      <Button
        disabled={isFormInvalid}
        type="submit"
        variant="primary.main"
        margin={{
          xs: "0 auto",
          md: "initial",
        }}
        fullWidth
      >
        Enviar
      </Button>

      {/* Desafiar a galera a colocar um loading e passar um feedback por escrito também */}

      <Box display="flex" justifyContent="center">
        {isFormSubmited && submissionStatus === formStates.ERROR && (
          <Lottie
            width="100px"
            height="100px"
            config={{
              animationData: errorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        )}

        {isFormSubmited && submissionStatus === formStates.DONE && (
          <Lottie
            width="100px"
            height="100px"
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        )}
      </Box>
    </form>
  );
}

export default function FormCadastro({ onClose, propsDoModal }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
      <Grid.Col
        display="flex"
        backgroundColor="#ffffff"
        flexDirection="row-reverse"
        paddingRight={{ md: "0" }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <CloseButton
          onClick={() => {
            onClose();
            console.log("fuui clicado");
          }}
        />
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: "16px",
            md: "85px",
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
