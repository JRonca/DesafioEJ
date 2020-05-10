
### `comando que deverá ser usado para rodar o app`
### `yarn start`

Rodará o sistema em modo desenvolvedor no endereço http://localhost:3000

### Código em C (Feito antes de iniciar o projeto em React para estabelecer a lógica)
```C
#include <stdio.h>
int main(){
    int A,B,C,D;
    scanf("%d%d%d%d",&A,&B,&C,&D);
    if(B>C && D>A && (C+D)>(A+B) && C>0 &&D>0 && A%2==0){
        printf("Valores aceitos\n");
    }else{
        printf("Valores nao aceitos\n");
    }
    return 0;
}

```
