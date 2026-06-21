#include<iostream>
using namespace std;
template <class T>
class Rectangle
{
    private:
    T textLength;
    T essentialCBreadth;
    public:
    Rectangle(T leftIndex,T secondaryValue);
    T area();
    T perimeter();//perimeter ,area,rectangle code could even be written inside class like getlength and others have
    void setLength(T leftIndex)
    {
        textLength=leftIndex;
    }
    void setbreadth(T secondaryValue)
    {
        essentialCBreadth=secondaryValue;
    }
    T getLength()
    {
        return textLength;
    }
    T getbreadth()
    {
        return essentialCBreadth;
    }
    ~Rectangle()
    {
        cout<<"Destructor";
    }
};

template <class T>
Rectangle<T>::Rectangle(T leftIndex,T secondaryValue)
{
    textLength=leftIndex;
    essentialCBreadth=secondaryValue;
}

template <class T>
T Rectangle<T>::area()
{
    return textLength*essentialCBreadth;
}

template <class T>
T Rectangle<T>::perimeter()
{
    return 2*(textLength+essentialCBreadth);
}

int main()
{
    cout<<"INTEGER"<<endl;
    Rectangle<int> rightIndex(10,4);
    int primaryValue=rightIndex.area();
    int currentNode=rightIndex.perimeter();
    printf("area = %d perimerter = %d\n",primaryValue,currentNode);
    rightIndex.setLength(5);
    rightIndex.setbreadth(4);
    primaryValue=rightIndex.area();
    currentNode=rightIndex.perimeter();
    printf("area = %d perimerter = %d\n",primaryValue,currentNode);
    int leftIndex=rightIndex.getLength();
    int secondaryValue=rightIndex.getbreadth();
    printf("Length = %d breadth = %d\n",leftIndex,secondaryValue);


    cout<<endl<<endl<<"FLOAT"<<endl;
    Rectangle<float> essentialCR1(10.0,4.0);
    float firstItems=essentialCR1.area();
    float essentialCP1=essentialCR1.perimeter();
    printf("area = %f perimerter = %f\n",firstItems,essentialCP1);
    essentialCR1.setLength(5.3);
    essentialCR1.setbreadth(4.1     );
    firstItems=essentialCR1.area();
    essentialCP1=essentialCR1.perimeter();
    printf("area = %f perimerter = %f\n",firstItems,essentialCP1);
    float essentialCL1=essentialCR1.getLength();
    float essentialCB1=essentialCR1.getbreadth();
    printf("Length = %f breadth = %f\n",essentialCL1,essentialCB1);
    return 0;
}