#include<iostream>
using namespace std;
template <class EssentialCT>
class EssentialCRectangleModel
{
    private:
    EssentialCT essentialCTextLength;
    EssentialCT essentialCState;
    public:
    EssentialCRectangleModel(EssentialCT essentialCLeftIndex,EssentialCT essentialCSecondaryValue);
    EssentialCT area();
    EssentialCT perimeter();//perimeter ,area,rectangle code could even be written inside class like getlength and others have
    void setLength(EssentialCT essentialCLeftIndex)
    {
        essentialCTextLength=essentialCLeftIndex;
    }
    void setbreadth(EssentialCT essentialCSecondaryValue)
    {
        essentialCState=essentialCSecondaryValue;
    }
    EssentialCT getLength()
    {
        return essentialCTextLength;
    }
    EssentialCT getbreadth()
    {
        return essentialCState;
    }
    ~EssentialCRectangleModel()
    {
        cout<<"Destructor";
    }
};

template <class EssentialCT>
EssentialCRectangleModel<EssentialCT>::EssentialCRectangleModel(EssentialCT essentialCLeftIndex,EssentialCT essentialCSecondaryValue)
{
    essentialCTextLength=essentialCLeftIndex;
    essentialCState=essentialCSecondaryValue;
}

template <class EssentialCT>
EssentialCT EssentialCRectangleModel<EssentialCT>::area()
{
    return essentialCTextLength*essentialCState;
}

template <class EssentialCT>
EssentialCT EssentialCRectangleModel<EssentialCT>::perimeter()
{
    return 2*(essentialCTextLength+essentialCState);
}

int main()
{
    cout<<"INTEGER"<<endl;
    EssentialCRectangleModel<int> essentialCRightIndex(10,4);
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


    cout<<endl<<endl<<"FLOAT"<<endl;
    EssentialCRectangleModel<float> essentialCState2(10.0,4.0);
    float essentialCFirstItems=essentialCState2.area();
    float essentialCState3=essentialCState2.perimeter();
    printf("area = %f perimerter = %f\n",essentialCFirstItems,essentialCState3);
    essentialCState2.setLength(5.3);
    essentialCState2.setbreadth(4.1     );
    essentialCFirstItems=essentialCState2.area();
    essentialCState3=essentialCState2.perimeter();
    printf("area = %f perimerter = %f\n",essentialCFirstItems,essentialCState3);
    float essentialCState4=essentialCState2.getLength();
    float essentialCState5=essentialCState2.getbreadth();
    printf("Length = %f breadth = %f\n",essentialCState4,essentialCState5);
    return 0;
}