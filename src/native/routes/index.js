import React from 'react';
import { Scene, Tabs, Stack, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';


import DeleteRealEstateContainer from '../../containers/DeleteRealEstate';

import RealEstateContainer from '../../containers/RealEstate';
import RealEstateComponent from '../components/RealEstate';
import RealEstateViewComponent from '../components/RealEstateView';


import UpdateRealEstateContainer from '../../containers/UpdateRealEstate';
import UpdateRealEstateComponent from '../components/UpdateRealEstate';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

import FilterViewContainer from '../../containers/FilterView';
import FilterViewComponent from '../components/FilterView';

console.disableYellowBox = true;

const Index = (
  <Stack key="home">
    <Scene hideNavBar key="home1">
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        {/* <Stack
          key="home"
          title={AppConfig.appName.toUpperCase()}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

        <Stack
          key="recipes"
          title="RECIPES"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="recipes" component={RecipesContainer} Layout={RecipesComponent} />
        </Stack> */}

        <Stack
          key="realestate"
          title="IMÓVEIS"
          icon={() => <Icon name="home" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="realestate" component={RealEstateContainer} Layout={RealEstateComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PERFIL"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="CRIAR CONTA"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="ESQUECEU A SENHA"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="ATUALIZAR PERFIL"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
          <Scene
            back
            key="updateRealEstate"
            title="CADASTRAR IMÓVEL"
            {...DefaultProps.navbarProps}
            component={UpdateRealEstateContainer}
            Layout={UpdateRealEstateComponent}
          />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="recipe"
      title="RECIPE"
      {...DefaultProps.navbarProps}
      component={RecipesContainer}
      Layout={RecipeViewComponent}
    />

    <Scene
      back
      clone
      key="imobi"
      title="IMÓVEL"
      {...DefaultProps.navbarProps}
      component={RealEstateContainer}
      Layout={RealEstateViewComponent}
    />

    <Scene
      back
      clone
      key="imobiEdit"
      title="EDITAR IMÓVEL"
      {...DefaultProps.navbarProps}
      component={RealEstateContainer}
      Layout={UpdateRealEstateComponent}
    />

    <Scene
      back
      clone
      key="imobiDelete"
      title="DELETAR IMÓVEL"
      {...DefaultProps.navbarProps}
      component={DeleteRealEstateContainer}
      Layout={UpdateRealEstateComponent}
    />
    
    <Scene
      back
      clone
      key="filterOne"
      title="FILTROS"
      {...DefaultProps.navbarProps}
      component={FilterViewContainer}
      Layout={FilterViewComponent}
    />

  </Stack>
);

export default Index;
