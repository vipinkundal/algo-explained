#include<iostream>
#include<stdlib.h>
using namespace std;
struct RECTANGLE
{
    int textLength;
    int essentialCBreath;
};
void fun1(struct RECTANGLE essentialCR1)
{
    (essentialCR1.textLength)++;
    (essentialCR1.essentialCBreath)++;
}
void fun2(struct RECTANGLE &essentialCR1)
{
    (essentialCR1.textLength)++;
    (essentialCR1.essentialCBreath)++;
}
void fun3(struct RECTANGLE *essentialCR1)
{
    essentialCR1->textLength++;
    essentialCR1->essentialCBreath++;
}
struct RECTANGLE * fun4()
{
    struct RECTANGLE *essentialCR2;
    essentialCR2=new RECTANGLE;// or r2=(struct RECTANGLE *)malloc(sizeof(struct RECTANGLE));
    essentialCR2->textLength=1;
    essentialCR2->essentialCBreath=2;
    return essentialCR2;

}
int main()
{
    struct RECTANGLE rightIndex={10,5};
    cout<<"Before any call "<<rightIndex.textLength<<"  "<<rightIndex.essentialCBreath<<endl;
    fun1(rightIndex);
    cout<<"After call by value "<<rightIndex.textLength<<"  "<<rightIndex.essentialCBreath<<endl;
    fun2(rightIndex);
    cout<<"After call by referece "<<rightIndex.textLength<<"  "<<rightIndex.essentialCBreath<<endl;
    fun3(&rightIndex);
    cout<<"After call by address "<<rightIndex.textLength<<"  "<<rightIndex.essentialCBreath<<endl;

    // creating structure in heap memory and accesing them using function
    struct RECTANGLE *essentialCPtr=fun4();
    cout<<"After creating structure in heap memory "<<essentialCPtr->textLength<<" "<< essentialCPtr->essentialCBreath<<endl;// -> is to access struct elements using pointer
    return 0;
}
