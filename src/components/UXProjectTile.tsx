import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
import Text from '../components/Text';
import RoundedBox from './RoundedBox';
import { useNavigate } from 'react-router-dom';

interface Props {
    children?: React.ReactNode;
    rightSide?: boolean;
    project: Project;
    projectKey: string;
}

interface State {

}

export const UXProjectTile = ({ project, projectKey, rightSide }: Props) => {
    const navigate = useNavigate()
    return (
        <Main onClick={() => navigate(`/ux/project/${projectKey}`)}>
            {!rightSide && <Image objectFit="cover" width="100%" height="100%" src={`/images/projects/UX/${projectKey}/${project.thumbnail}`}></Image>}

            <Information rightSide={rightSide || false}>
                <Text fontSize='53px' fontFamily='montserrat' fontWeight='400' align='left'>{project.title}</Text>
                <Text fontSize='33px' fontFamily='montserrat' fontWeight='400' align='left'>{project.subtitle}</Text>

                {/* skill list, each skill in rounded text box color coded: SKILL: #C092F9, SOFTWARE: #FF63CA, LANGUAGES: #A6B8FF */}
                <SkillList>
                    {project.skills.map((skill, i) => (
                        <RoundedBox color='#C092F9' width='auto' height='auto' margin='0 10px 0 0' key={i} >
                            <Text fontSize='15px' fontFamily='nunito' fontWeight='500' align='center' padding='5px 10px' margin='auto' color='white'>{skill}</Text>
                        </RoundedBox>
                    ))}
                    {project.software.map((software, i) => (
                        <RoundedBox color='#FF63CA' width='auto' height='auto' margin='0 10px 0 0' key={i} >
                            <Text fontSize='15px' fontFamily='nunito' fontWeight='500' align='center' padding='0 10px 0 10px' margin='auto' color='white'>{software}</Text>
                        </RoundedBox>
                    ))}
                    {project.languages.map((language, i) => (
                        <RoundedBox color='#A6B8FF' width='auto' height='auto' margin='0 10px 0 0' key={i} >
                            <Text fontSize='15px' fontFamily='nunito' fontWeight='500' align='center' padding='0 10px 0 10px' margin='auto' color='white'>{language}</Text>
                        </RoundedBox>
                    ))}
                </SkillList>


                <Text fontSize='20px' fontFamily='montserrat' fontWeight='400' align='left'>{project.short}</Text>

                <Bottom>
                    <Text fontSize='18px' fontFamily='montserrat' fontWeight='400' align='left'>{project.type}</Text>
                </Bottom>
            </Information>
            {rightSide && <Image objectFit="cover" width="100%" height="100%" src={`/images/projects/UX/${projectKey}/${project.thumbnail}`}></Image>}
        </Main >


    )
}

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 5%;
    padding: 50px;
    
    border-radius: 20px;
    transition-duration: 500ms;

    img{
        border-radius: 20px;
        box-shadow: 5px 4px 17px 2px rgba(0,0,0,0.45);
        
        transition-duration: 500ms;
    }

    &:hover{
        transform: scale(1.01);
        box-shadow: 5px 4px 17px 2px rgba(0,0,0,0.45);
        transition-duration: 500ms;

        img{
            transition-duration: 500ms;
            border-radius: 20px;
            box-shadow: none;
        }
    }
`;

const SkillList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 2% 0 5% 0;
    padding: 0;
    white-space: nowrap;
`;

const Bottom = styled.div`
    margin-top: auto;
`;

const Information = styled.div<{ rightSide: boolean }>`
    display: flex;
    flex-direction: column;
    margin: ${p => p.rightSide ? "0 10% 0 0" : "0 0 0 10%"};
    height: 100%;
`;

