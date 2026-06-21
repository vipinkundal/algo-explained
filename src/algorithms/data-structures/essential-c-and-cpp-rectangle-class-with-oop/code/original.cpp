#include<iostream>
using namespace std;
class Rectangle
{
    private:
    int textLength;
    int essentialCBreadth;
    public:
    Rectangle()//default constructor if no parameter is passed
    {
        textLength=0;
        essentialCBreadth=0;
    }
    Rectangle(int leftIndex,int secondaryValue);
    int area();
    int perimeter();//perimeter ,area,rectangle code could even be written inside class like getlength and others have
    void setLength(int leftIndex)
    {
        textLength=leftIndex;
    }
    void setbreadth(int secondaryValue)
    {
        essentialCBreadth=secondaryValue;
    }
    int getLength()
    {
        return textLength;
    }
    int getbreadth()
    {
        return essentialCBreadth;
    }
    ~Rectangle()
    {
        cout<<"Destructor";
    }
};
Rectangle::Rectangle(int leftIndex,int secondaryValue)
{
    textLength=leftIndex;
    essentialCBreadth=secondaryValue;
}
int Rectangle::area()
{
    return textLength*essentialCBreadth;
}
int Rectangle::perimeter()
{
    return 2*(textLength+essentialCBreadth);
}
int main()
{
    Rectangle rightIndex(10,4);
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
    return 0;
}