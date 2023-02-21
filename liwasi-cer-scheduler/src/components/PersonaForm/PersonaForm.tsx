import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, Heading, Input, List, ListIcon, ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./PersonaForm.css"

function PersonaForm() {
    return (
        <React.Fragment>
            <Box w='100%' p={4}>
                <Heading>🎉🌻👋 Bienvenido al certech Liwasi! 🎉🌻👋</Heading>
                <Text fontSize='sm'>Estamos muy emocionados de recibirte en nuestro espacio educativo rural. 🤩 tendrás la oportunidad de aprender nuevas habilidades y conocimientos que te ayudarán a crecer personal y profesionalmente en la industria de la Tecnologia. 📚💡💪</Text>
                <Text fontSize='sm'>Nos apasiona proporcionar una educación de calidad que sea accesible para todos. Nuestro equipo de instructores altamente capacitados está listo para guiarte en este emocionante viaje educativo. 🤓🙌</Text>
                <Text fontSize='lg'>Para comenzar, necesitamos que nos cuentes un poco sobre ti. 🙋‍♀️🙋‍♂️</Text>
                <FormControl isRequired>
                    <FormLabel>Tu numero de Celular</FormLabel>
                    <Input placeholder='Escribe aqui tu numero celular' />
                    <FormHelperText>Te prometemos que no usaremos tu numero para publicidad.</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Como te llamas?</FormLabel>
                    <Input placeholder='Escribe aqui tu nombre' />
                </FormControl>
                <FormControl>
                    <FormLabel>Cual o cuales son tus apellidos?</FormLabel>
                    <Input placeholder='Escribe aqui tu apellido' />
                </FormControl>
                <Text fontSize='sm'>¡Espera un momentito! ⏳ Antes de empezar, queremos asegurarnos de que estás de acuerdo con nuestras condiciones de uso. 🤝 No te preocupes, no son aburridas, pero son importantes para que todos podamos disfrutar de nuestra plataforma. 💻🌟</Text>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Terminos y condiciones
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box>
                                <Text fontSize='xl'> ¡Atención, atención! 📢👀 </Text>
                                <Text fontSize='md'>Aquí te dejamos algunos de nuestros términos y condiciones para que puedas disfrutar de nuestro Centro de Estudio Rural de Tech de la mejor manera posible. 🤖💻🌱</Text>
                                <Divider />
                                <OrderedList spacing={3}>
                                    <ListItem>
                                        Nos reservamos el derecho de admisión. Pero no te preocupes, ¡nos encanta recibir a todo el mundo! 🤗👥
                                    </ListItem>
                                    <ListItem>
                                        Solo puedes reservar un turno por día. Así que elige sabiamente tu hora de estudio. ⏰🤔
                                    </ListItem>
                                    <ListItem>
                                        Los horarios para reservar son de 9:00 am a 6:00 pm, en horario laboral. Si vienes después de ese horario, puede que te encontremos tomando una siesta 🛌💤
                                    </ListItem>
                                    <ListItem>
                                        ¡Nada de entrar en estado alterado de conciencia! 🙅‍♂️ Si has tomado algo, mejor quédate en casa y descansa.
                                    </ListItem>
                                    <ListItem>
                                        Necesitamos tu número de celular para confirmar la reserva. ¡Así que asegúrate de tener tu teléfono a mano! 📱
                                    </ListItem>
                                </OrderedList>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Checkbox colorScheme='green' defaultChecked>
                    Acepto los terminos y condiciones de uso.
                </Checkbox>
                <Button colorScheme='teal' size='lg'>
                    Reservar mi espacio
                </Button>
            </Box>
        </React.Fragment >
    );
}

export { PersonaForm };