#include<iostream>
using namespace std;
class MatrixDiagonalMatrixModel
{
    private:
    int matrixDiagonalItemCount;
    int *matrixDiagonalFirstItems;
    public:
    MatrixDiagonalMatrixModel(int matrixDiagonalItemCount)//constructor of matrix
    {
        this->matrixDiagonalItemCount=matrixDiagonalItemCount;
        matrixDiagonalFirstItems=new int[matrixDiagonalItemCount];   
    }

    void set(int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex,int matrixDiagonalInputValue);

    int get(int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex);

    void Display();

    ~ MatrixDiagonalMatrixModel(){//destructor destructs/clear heap memory allocated
        delete []matrixDiagonalFirstItems;

    }

};
void MatrixDiagonalMatrixModel::set(int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex,int matrixDiagonalInputValue)// :: scope resolution operator to indicate function belong to class matrix
{
    if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
    {
        matrixDiagonalFirstItems[matrixDiagonalScanIndex-1]=matrixDiagonalInputValue;
    }

}
int MatrixDiagonalMatrixModel::get(int matrixDiagonalScanIndex,int matrixDiagonalWriteIndex)
{
    if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
        return matrixDiagonalFirstItems[matrixDiagonalScanIndex-1];
    else
        return 0;
}
void MatrixDiagonalMatrixModel::Display()
{
    for(int matrixDiagonalScanIndex=0;matrixDiagonalScanIndex<(matrixDiagonalItemCount);matrixDiagonalScanIndex++)
    {
        for(int matrixDiagonalWriteIndex=0;matrixDiagonalWriteIndex<(matrixDiagonalItemCount);matrixDiagonalWriteIndex++)
        {
            if(matrixDiagonalScanIndex==matrixDiagonalWriteIndex)
            cout<<matrixDiagonalFirstItems[matrixDiagonalScanIndex]<<" ";
            else
            cout<<"0 ";
        }
        cout<<endl;
    }
}
int main()
{
    MatrixDiagonalMatrixModel matrixDiagonalColumnCount(3);
    matrixDiagonalColumnCount.set(1,1,4);
    matrixDiagonalColumnCount.set(2,2,5);
    matrixDiagonalColumnCount.set(3,3,6);
    matrixDiagonalColumnCount.Display();
    cout<<matrixDiagonalColumnCount.get(3,3);

    return 0;
}