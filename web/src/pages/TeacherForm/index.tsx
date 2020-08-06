import React from 'react';

import PageHeader from "../../components/PageHeader/";
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from "../../assets/images/icons/warning.svg";

import './styles.css';
import Textarea from '../../components/Textarea';

function TeacherForm() {
    return (
        <div className="container" id="page-teacher-form">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" type="number" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Português', label: 'Português' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" type="number" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button
                            type="button">
                            + Novo horário
                        </button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dia da Semana"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda' },
                                { value: '2', label: 'Terça' },
                                { value: '3', label: 'Quarta' },
                                { value: '4', label: 'Quinta' },
                                { value: '5', label: 'Sexta' },
                                { value: '6', label: 'Sábado' },
                            ]}
                        />

                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Importante <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
};

export default TeacherForm;