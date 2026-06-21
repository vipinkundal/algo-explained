#include<iostream>
using namespace std;
class matrixCState//row major representaion
{
    private:
    int matrixCItemCount;
    int *matrixCFirstItems;
    public:
    matrixCState(int matrixCItemCount)//constructor of matrix
    {
        this->matrixCItemCount=matrixCItemCount;
        matrixCFirstItems=new int[matrixCItemCount];   
    }

    void set(int matrixCScanIndex,int matrixCWriteIndex,int matrixCInputValue);

    int get(int matrixCScanIndex,int matrixCWriteIndex);

    void Display();

    ~ matrixCState(){//destructor destructs/clear heap memory allocated
        delete []matrixCFirstItems;

    }

};
void matrixCState::set(int matrixCScanIndex,int matrixCWriteIndex,int matrixCInputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(matrixCScanIndex>=matrixCWriteIndex)
    {
        int matrixCSwapValue=((matrixCScanIndex*(matrixCScanIndex-1)/2)+(matrixCWriteIndex-1));
        matrixCFirstItems[matrixCSwapValue]=matrixCInputValue;
    }
}
int matrixCState::get(int matrixCScanIndex,int matrixCWriteIndex)
{
    if(matrixCScanIndex>=matrixCWriteIndex)
    {
        int matrixCSwapValue=((matrixCScanIndex*(matrixCScanIndex-1)/2)+(matrixCWriteIndex-1));
        return matrixCFirstItems[matrixCSwapValue];
    }
    else
        return 0;
}
void matrixCState::Display()
{
    for(int matrixCScanIndex=1;matrixCScanIndex<=(matrixCItemCount);matrixCScanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int matrixCWriteIndex=1;matrixCWriteIndex<=(matrixCItemCount);matrixCWriteIndex++)
        {
            if(matrixCScanIndex>=matrixCWriteIndex)
            {
                int matrixCSwapValue=((matrixCScanIndex*(matrixCScanIndex-1)/2)+(matrixCWriteIndex-1));
                printf("%d ",matrixCFirstItems[matrixCSwapValue]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}

class matrixCState2//row major representaion
{
    private:
    int matrixCItemCount;
    int *matrixCFirstItems;
    public:
    matrixCState2(int matrixCItemCount)//constructor of matrix
    {
        this->matrixCItemCount=matrixCItemCount;
        matrixCFirstItems=new int[matrixCItemCount];   
    }

    void cset(int matrixCScanIndex,int matrixCWriteIndex,int matrixCInputValue);

    int cget(int matrixCScanIndex,int matrixCWriteIndex);

    void cDisplay();

    ~ matrixCState2(){//destructor destructs/clear heap memory allocated
        delete []matrixCFirstItems;

    }

};
void matrixCState2::cset(int matrixCScanIndex,int matrixCWriteIndex,int matrixCInputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(matrixCScanIndex>=matrixCWriteIndex)
    {
        if(matrixCScanIndex>=matrixCWriteIndex)
        {
            matrixCFirstItems[matrixCItemCount*(matrixCWriteIndex-1)-(matrixCWriteIndex-1)*(matrixCWriteIndex-2)/2+(matrixCScanIndex-matrixCWriteIndex)]=matrixCInputValue;
        }

    }
}
int matrixCState2::cget(int matrixCScanIndex,int matrixCWriteIndex)
{
    if(matrixCScanIndex>=matrixCWriteIndex)
    {
        return matrixCFirstItems[matrixCItemCount*(matrixCWriteIndex-1)-(matrixCWriteIndex-1)*(matrixCWriteIndex-2)/2+(matrixCScanIndex-matrixCWriteIndex)];
    }
    else
        return 0;
}
void matrixCState2::cDisplay()
{
    for(int matrixCScanIndex=1;matrixCScanIndex<=matrixCItemCount;matrixCScanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int matrixCWriteIndex=1;matrixCWriteIndex<=matrixCItemCount;matrixCWriteIndex++)
        {
            if(matrixCScanIndex>=matrixCWriteIndex)
            {
                printf("%d ",matrixCFirstItems[matrixCItemCount*(matrixCWriteIndex-1)-(matrixCWriteIndex-1)*(matrixCWriteIndex-2)/2+(matrixCScanIndex-matrixCWriteIndex)]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    int matrixCState4,matrixCInputValue;
    //using row major formula
    
    printf("Enter number of elements ");
    scanf("%d",&matrixCState4);
    class matrixCState matrixCColumnCount(matrixCState4);
    printf("Enter the elements ");
    for(int matrixCScanIndex=1;matrixCScanIndex<=matrixCState4;matrixCScanIndex++)
    {
        for(int matrixCWriteIndex=1;matrixCWriteIndex<=matrixCState4;matrixCWriteIndex++)
        {
            scanf("%d",&matrixCInputValue);
            matrixCColumnCount.set(matrixCScanIndex,matrixCWriteIndex,matrixCInputValue);
        }
    }
    
    matrixCColumnCount.Display();
    printf("\n\n");
    int matrixCState3;
    //using column major formula
    printf("Enter number of elements ");
    scanf("%d",&matrixCState3);
    class matrixCState2 matrixCState5(matrixCState3);
    printf("Enter the elements ");
    for(int matrixCScanIndex=1;matrixCScanIndex<=matrixCState3;matrixCScanIndex++)
    {
        for(int matrixCWriteIndex=1;matrixCWriteIndex<=matrixCState3;matrixCWriteIndex++)
        {
            scanf("%d",&matrixCInputValue);
            matrixCState5.cset(matrixCScanIndex,matrixCWriteIndex,matrixCInputValue);
        }
    }
    matrixCState5.cDisplay();
    
    return 0;
}