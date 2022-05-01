/*
	C++ multithreading hello world example
*/

//i/o
#include <iostream>

//thread stuff
#include <thread>

//cross platform sleep function
#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

//get the mutex into our program
#include <mutex>

//our callable object
void printer(std::string thread_name,int run_count, std::mutex * data_lock) {
	for (int i = 0; i < run_count; i++) {
		
		//lock print so no other thread prints
		data_lock->lock();
		
		std::cout << "hello from thread " << thread_name << std::endl;
	
		//unlock the print so other threads can run
		data_lock->unlock();
		
		sleep(1);
	}
}

int main(int argc, char ** argv) {
	
	//make a lock for our threads
	std::mutex rubber_chicken;

	std::thread t1(printer,"thread 1",5,&rubber_chicken);
	std::thread t2(printer,"thread 2",5,&rubber_chicken);
		
	t1.join();
	std::cout << "thread 1 finished" << std::endl;
	
	t2.join();
	std::cout << "thread 2 finished" << std::endl;

	return 1;
}
