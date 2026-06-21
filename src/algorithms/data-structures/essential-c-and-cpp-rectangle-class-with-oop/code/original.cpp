#include<iostream>
using namespace std;
class EssentialCRectangleModel
{
    private:
    int essentialCTextLength;
    int essentialCState;
    public:
    EssentialCRectangleModel()//default constructor if no parameter is passed
    {
        essentialCTextLength=0;
        essentialCState=0;
    }
    EssentialCRectangleModel(int essentialCLeftIndex,int essentialCSecondaryValue);
    int area();
    int perimeter();//perimeter ,area,rectangle code could even be written inside class like getlength and others have
    void setLength(int essentialCLeftIndex)
    {
        essentialCTextLength=essentialCLeftIndex;
    }
    void setbreadth(int essentialCSecondaryValue)
    {
        essentialCState=essentialCSecondaryValue;
    }
    int getLength()
    {
        return essentialCTextLength;
    }
    int getbreadth()
    {
        return essentialCState;
    }
    ~EssentialCRectangleModel()
    {
        cout<<"Destructor";
    }
};
EssentialCRectangleModel::EssentialCRectangleModel(int essentialCLeftIndex,int essentialCSecondaryValue)
{
    essentialCTextLength=essentialCLeftIndex;
    essentialCState=essentialCSecondaryValue;
}
int EssentialCRectangleModel::area()
{
    return essentialCTextLength*essentialCState;
}
int EssentialCRectangleModel::perimeter()
{
    return 2*(essentialCTextLength+essentialCState);
}
int main()
{
    EssentialCRectangleModel essentialCRightIndex(10,4);
    int essentialCPrimaryValue=essentialCRightIndex.area();
    int essentialCCurrentNode=essentialCRightIndex.perimeter();
    printf("area = %d perimerter = %d\n",essentialCPrimaryValue,essentialCCurrentNode);
    essentialCRightIndex.setLength(5);
    essentialCRightIndex.setbreadth(4);
    essentialCPrimaryValue=essentialCRightIndex.area();
    essentialCCurrentNode=essentialCRightIndex.perimeter();
    printf("area = %d perimerter = %d\n",essentialCPrimaryValue,essentialCCurrentNode);
    int essentialCLeftIndex=essentialCRightIndex.getLength();
    int essentialCSecondaryValue=essentialCRightIndex.getbreadth();
    printf("Length = %d breadth = %d\n",essentialCLeftIndex,essentialCSecondaryValue);
    return 0;
}