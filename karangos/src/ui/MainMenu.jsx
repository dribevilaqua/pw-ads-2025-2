import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function BasicMenu() {

  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuAberto = Boolean(menuAnchor);

  const abrirMenu = (e) => {
    setMenuAnchor(e.currentTarget);
  };

  const fecharMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <div>
      <IconButton
        onClick={abrirMenu}
        edge="start"
        color="inherit"
        aria-haspopup="true"
        aria-expanded={menuAberto ? "true" : undefined}
        aria-controls={menuAberto ? "menu-opcoes" : undefined}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-opcoes"
        anchorEl={menuAnchor}
        open={menuAberto}
        onClose={fecharMenu}
        slotProps={{
          list: {
            "aria-labelledby": "menu-opcoes",
          },
        }}
      >
        <MenuItem
          onClick={fecharMenu}
          component={Link}
          to="/"
          divider
        >
          Página Inicial
        </MenuItem>

        <MenuItem
          onClick={fecharMenu}
          component={Link}
          to="/cars"
        >
          Listagem de Veículos
        </MenuItem>

        <MenuItem
          onClick={fecharMenu}
          component={Link}
          to="/sobre-autor"
          divider
        >
          Sobre o Autor
        </MenuItem>

        <MenuItem
          onClick={fecharMenu}
          component={Link}
          to="/customers"
        >
          Listagem de Clientes
        </MenuItem>
      </Menu>
    </div>
  );
}
