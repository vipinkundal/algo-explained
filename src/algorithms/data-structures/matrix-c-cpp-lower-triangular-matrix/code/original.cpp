#include<iostream>
using namespace std;
class matrixCRMatrix//row major representaion
{
    private:
    int itemCount;
    int *firstItems;
    public:
    matrixCRMatrix(int itemCount)//constructor of matrix
    {
        this->itemCount=itemCount;
        firstItems=new int[itemCount];   
    }

    void set(int scanIndex,int writeIndex,int inputValue);

    int get(int scanIndex,int writeIndex);

    void Display();

    ~ matrixCRMatrix(){//destructor destructs/clear heap memory allocated
        delete []firstItems;

    }

};
void matrixCRMatrix::set(int scanIndex,int writeIndex,int inputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(scanIndex>=writeIndex)
    {
        int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));
        firstItems[swapValue]=inputValue;
    }
}
int matrixCRMatrix::get(int scanIndex,int writeIndex)
{
    if(scanIndex>=writeIndex)
    {
        int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));
        return firstItems[swapValue];
    }
    else
        return 0;
}
void matrixCRMatrix::Display()
{
    for(int scanIndex=1;scanIndex<=(itemCount);scanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int writeIndex=1;writeIndex<=(itemCount);writeIndex++)
        {
            if(scanIndex>=writeIndex)
            {
                int swapValue=((scanIndex*(scanIndex-1)/2)+(writeIndex-1));
                printf("%d ",firstItems[swapValue]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}

class matrixCCMatrix//row major representaion
{
    private:
    int itemCount;
    int *firstItems;
    public:
    matrixCCMatrix(int itemCount)//constructor of matrix
    {
        this->itemCount=itemCount;
        firstItems=new int[itemCount];   
    }

    void cset(int scanIndex,int writeIndex,int inputValue);

    int cget(int scanIndex,int writeIndex);

    void cDisplay();

    ~ matrixCCMatrix(){//destructor destructs/clear heap memory allocated
        delete []firstItems;

    }

};
void matrixCCMatrix::cset(int scanIndex,int writeIndex,int inputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(scanIndex>=writeIndex)
    {
        if(scanIndex>=writeIndex)
        {
            firstItems[itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)]=inputValue;
        }

    }
}
int matrixCCMatrix::cget(int scanIndex,int writeIndex)
{
    if(scanIndex>=writeIndex)
    {
        return firstItems[itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)];
    }
    else
        return 0;
}
void matrixCCMatrix::cDisplay()
{
    for(int scanIndex=1;scanIndex<=itemCount;scanIndex++)//here  i is considered as matrix index so is started from 1
    {
        for(int writeIndex=1;writeIndex<=itemCount;writeIndex++)
        {
            if(scanIndex>=writeIndex)
            {
                printf("%d ",firstItems[itemCount*(writeIndex-1)-(writeIndex-1)*(writeIndex-2)/2+(scanIndex-writeIndex)]);
            }
            else
            printf("%d ",0);
        }
        printf("\n");
    }
}
int main()
{
    int matrixCNum,inputValue;
    //using row major formula
    
    printf("Enter number of elements ");
    scanf("%d",&matrixCNum);
    class matrixCRMatrix columnCount(matrixCNum);
    printf("Enter the elements ");
    for(int scanIndex=1;scanIndex<=matrixCNum;scanIndex++)
    {
        for(int writeIndex=1;writeIndex<=matrixCNum;writeIndex++)
        {
            scanf("%d",&inputValue);
            columnCount.set(scanIndex,writeIndex,inputValue);
        }
    }
    
    columnCount.Display();
    printf("\n\n");
    int matrixCNum2;
    //using column major formula
    printf("Enter number of elements ");
    scanf("%d",&matrixCNum2);
    class matrixCCMatrix matrixCM2(matrixCNum2);
    printf("Enter the elements ");
    for(int scanIndex=1;scanIndex<=matrixCNum2;scanIndex++)
    {
        for(int writeIndex=1;writeIndex<=matrixCNum2;writeIndex++)
        {
            scanf("%d",&inputValue);
            matrixCM2.cset(scanIndex,writeIndex,inputValue);
        }
    }
    matrixCM2.cDisplay();
    
    return 0;
}