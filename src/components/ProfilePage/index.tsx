import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage, 
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Emanuel Massafera</h1>
        <h2>@emanuelmassafera</h2>

        <p>
          Front-end Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Rita do Sapucaí, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 de abril de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>107</strong>
          </span>
          <span>
          <strong>107 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
