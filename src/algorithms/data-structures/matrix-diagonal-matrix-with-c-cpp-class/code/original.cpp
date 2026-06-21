#include<iostream>
using namespace std;
class Matrix
{
    private:
    int itemCount;
    int *firstItems;
    public:
    Matrix(int itemCount)//constructor of matrix
    {
        this->itemCount=itemCount;
        firstItems=new int[itemCount];   
    }

    void set(int scanIndex,int writeIndex,int inputValue);

    int get(int scanIndex,int writeIndex);

    void Display();

    ~ Matrix(){//destructor destructs/clear heap memory allocated
        delete []firstItems;

    }

};
void Matrix::set(int scanIndex,int writeIndex,int inputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(scanIndex==writeIndex)
    {
        firstItems[scanIndex-1]=inputValue;
    }

}
int Matrix::get(int scanIndex,int writeIndex)
{
    if(scanIndex==writeIndex)
        return firstItems[scanIndex-1];
    else
        return 0;
}
void Matrix::Display()
{
    for(int scanIndex=0;scanIndex<(itemCount);scanIndex++)
    {
        for(int writeIndex=0;writeIndex<(itemCount);writeIndex++)
        {
            if(scanIndex==writeIndex)
            cout<<firstItems[scanIndex]<<" ";
            else
            cout<<"0 ";
        }
        cout<<endl;
    }
}
int main()
{
    Matrix columnCount(3);
    columnCount.set(1,1,4);
    columnCount.set(2,2,5);
    columnCount.set(3,3,6);
    columnCount.Display();
    cout<<columnCount.get(3,3);

    return 0;
}