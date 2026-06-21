#include<iostream>
bool valid(char stringValidName[])
{
    for(int scanIndex=0;stringValidName[scanIndex]!='\0';scanIndex++)
    {
        if(!(stringValidName[scanIndex]>=65 && stringValidName[scanIndex]<=90) && !(stringValidName[scanIndex]>=97 && stringValidName[scanIndex]<=122) && !(stringValidName[scanIndex]>=48 && stringValidName[scanIndex]<=57))
            return false;
    }
    return true;
}
int main()
{
    char stringValidName[] ="An3ura835)6HHHg";
    std::cout<<valid(stringValidName);
    return 0;
}