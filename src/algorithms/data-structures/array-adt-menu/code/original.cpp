#include <iostream>
using namespace std;

template<class T>
class Array{
private:
    T * firstItems;
    int itemCapacity;
    int textLength;
public:
    Array()
    {
        itemCapacity=10;
        textLength=0;
        firstItems=new T[itemCapacity];

    }
    Array(int itemCapacity)
    {
        this->itemCapacity=itemCapacity;
        textLength=0;
        firstItems=new T[itemCapacity];

    }
    void insert(int targetIndex,T storedValue){
        if(targetIndex>=0 && targetIndex<=itemCapacity){
        for(int scanIndex=textLength;scanIndex>targetIndex;scanIndex--)
        {
            firstItems[scanIndex]=firstItems[scanIndex-1];
        }
        firstItems[targetIndex]=storedValue;
        textLength++;
        }
    }
    void append(T inputValue){
        if(textLength<itemCapacity)
        {
            firstItems[textLength]=inputValue;
            textLength++;
        }
    }
    
    void display(){
        for (int scanIndex = 0; scanIndex < textLength; scanIndex++){
            std::cout<<firstItems[scanIndex] << " ";
        }
    }
    int l_search(T storedValue)
    {
        for(int scanIndex=0;scanIndex<textLength;scanIndex++)
        {
            if(firstItems[scanIndex]==storedValue)
            {
                return scanIndex;
            }
        }
        return -1;
    }
    void deletion(int targetIndex)
    {
        if(targetIndex>=0 && targetIndex<=textLength)
        {
            for(int scanIndex=targetIndex;scanIndex<textLength-1;scanIndex++)
            {
                firstItems[scanIndex]=firstItems[scanIndex+1];
            }
            textLength--;
            std::cout<<"deleted index "<<targetIndex<<" element in array"<<std::endl;
        }    
    }
    T Sum()
    {
        T arrayAdtSum=0;
        for(int scanIndex=0;scanIndex<textLength;scanIndex++)
            arrayAdtSum=arrayAdtSum+firstItems[scanIndex];
        return arrayAdtSum;
    }

    Array* Union(Array);

    ~Array()
    {
        delete []firstItems;
    }
    
};
template<class T>
Array<T>* Array<T>::Union(Array<T> arrayAdtArr2)
{
    Array* arrayAdtArr3=new Array[10];
    int scanIndex=0,writeIndex=0,probeIndex=0,columnCount=0;
    for(scanIndex=0;scanIndex<textLength;scanIndex++,probeIndex++)
        arrayAdtArr3->firstItems[probeIndex]=firstItems[scanIndex];
    for(scanIndex=0;scanIndex<arrayAdtArr2.textLength;scanIndex++)
        {
            int leftIndex=0,writeIndex=0;
            while(writeIndex<textLength)
            {
                if(arrayAdtArr2.firstItems[scanIndex]==firstItems[writeIndex])
                {
                    leftIndex=1;
                    break;
                }
                writeIndex++;

            }
            if(leftIndex==0)
                arrayAdtArr3->firstItems[probeIndex++]=arrayAdtArr2.firstItems[scanIndex];
        }
        arrayAdtArr3->textLength=probeIndex;
        arrayAdtArr3->itemCapacity=100;
        return arrayAdtArr3;
    }



int main() {
    int scanIndex,arrayAdtSz;
    int inputValue;
    cout<<"Enter size of array ";
    cin>>arrayAdtSz;
    Array<int> items(arrayAdtSz);
    int currentChar;
    do{
        cout<<"\nMenu\n";
        cout<<"1.Append\n";
        cout<<"2.Insert\n";
        cout<<"3.Search\n";
        cout<<"4.Sum\n";
        cout<<"5.Display\n";
        cout<<"6.Delete\n";
        cout<<"7.Exit\n";

        cin>>currentChar;
        switch(currentChar)
        {
            case 1:
                cout<<"Enter element to appended\n";
                cin>>inputValue;
                items.append(inputValue);
                break;

            case 2:
                cout<<"Enter element to be inserted\n";
                cin>>inputValue;
                cout<<"Enter position of element\n";
                cin>>scanIndex;
                items.insert(scanIndex,inputValue);
                break;

            case 3:
                cout<<"Enter element to be searched\n";
                cin>>inputValue;
                scanIndex=items.l_search(inputValue);
                if(scanIndex==-1)
                    cout<<"Element not found\n";
                else
                    cout<<"Element found at "<<scanIndex<<" position ";
                break;

            case 4:
                cout<<"Sum of array elements is "<<items.Sum();
                break;

            case 5:
                items.display();
                break;

            case 6:
                cout<<"Enter index at which elements will be deleted\n";
                cin>>scanIndex;
                items.deletion(scanIndex);
                break;

        }
    }while(currentChar<7);

    Array<int> secondItems(10);
    secondItems.append(4);
    secondItems.append(5);
    secondItems.append(6);
    Array<int> *mergedItems=items.Union(secondItems);
    mergedItems->display();

    return 0;
}