import React from 'react';

import Button from '../Button';

import { 
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Bottomside,
  Avatar,
  ProfileData,
  ExitIcon
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton className="active">
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <Bottomside>
        <Avatar />

        <ProfileData>
          <strong>Emanuel Massafera</strong>
          <span>@emanuelmassafera</span>
        </ProfileData>

        <ExitIcon />
      </Bottomside>
    </Container>
  );
};

export default MenuBar;
