# APP-Nutrin
APP para gestão da nutricionista


PADRONIZAÇÃO
---------------
Padrão de Cores SASS

```
$colors: (
  primary:    #18c00c,
  secondary:  #488aff,
  warning:    #ffae35,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  background: #e4e4e4,
);
```

Para chamar uma cor, exemplo:

```
background-color: map-get($colors, primary);
color: map-get($colors, background);
```

TEMA E FORMULARIO PADRÃO DAS PAGINAS
-------------------------

Sempre importar na sua pagina o arquivo theme.scss para ter o padrão visual do app:

```
@import "./theme/theme.scss";
```

Para usar o formulario padrão você precisa seguir um padrão de criação de form, exemplo:

```
<form class="formController">
  
  <ion-item>
    <ion-label></ion-label>
    <ion-input></ion-input>
  </ion-item>  
  
</form>
```

e importar isso no arquivo scss.

```
@import "./theme/form.scss";
```
