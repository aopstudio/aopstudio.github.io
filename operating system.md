# 操作系统复习
## Introduction 1
### 什么是操作系统
* 在用户和计算机硬件之间的中介
* OS是个软件
——一个虚拟化计算机的程序

```dot
digraph g{
    App[label="Application"]
    OS[label="Operating System"]
    App->OS->App
    OS->CPU->OS
    OS->Memory->OS
    OS->Devices->OS
}
```


OS的作用：
* 物理机层面（CPU Memory Devices）：分配资源
* 虚拟机层面（Application）：控制程序

### History of OSs
No OS->Simple Batch Systems->Batch System->Multiprogramming systems->Time sharing system->Modern System

### 系统类型
#### 分布式系统 Distributed System
优点：**loosely-coupled 松耦合**
- 资源共享
- 提高计算速度
- 更可靠
- 交互性强

#### 并行系统 Parallel Operating System
多处理器 **紧耦合**
- 所有处理器共享时钟、总线、内存

两类
- 对称并行 Symmetric multiprocessing
    * 每个CPU没有差别
- 非对称并行 Asymmetric multiprocessing
    * 每个CPU有特定功能

优点
- 提高吞吐量
- 提高可靠性
- 规模经济

#### 集群系统 Clustered Systems
- 和并行系统不同
    * 由多个独立系统组成
- 和分布式系统不同
    * 共享存储

#### 实时系统 Real time System
硬实时：保证所有任务都在deadline之前完成
软实时：尽最大努力
#### 无处不在的系统 Ubiquitous Systems
未来
更关注人机交互
安全

## Introduction 2
### 计算机系统四大组成
User：使用系统的角色，不一定是人
Application programs
Operating system
Hardware

### 启动过程 Startup process
1. 打开电源
2. CPU通过系统时钟初始化
3. 在BIOS中找到启动程序的CPU的第一条指令
4. 执行开机自检(POST)，检查所有硬件设备

**Bootstrap program** 启动程序
很重要，在开机或重启的时候加载
-一般写在ROM或EPROM中，称为**固件 firmware**

### 运行过程 Running process
OS等待人去交互

多个任务如何共享一个CPU？
- **中断 interrupt**

### I/O操作
* IO设备可以和CPU同时执行
    - I/O在设备和控制器缓存（controller's buffer）之间转移数据
    - CPU在控制器和主存之间转移数据
* I/O设备访问
    - Memory Mapped I/O（CPU就像访问内存一样访问I/O）
    - Programmed I/O（每个控制寄存器都分配一个I/O端口号，CPU使用特定的I/O指令去读写寄存器）

### 轮询和中断 Polling or Interrupt
#### 轮询
CPU不断读状态寄存器直到有任务
-效率不高
#### 中断
谁有需要谁就主动通知CPU
-硬件触发通过**总线** 软件触发通过**系统调用**

**大部分OS都是中断的**

### 操作系统的服务
* 程序执行 Program execution
* I/O操作 I/O operations
* 文件系统的操作 File-system manipulation
* Communications 在进程间传递消息
* 错误检测 Error detection

额外的功能
* 资源分配 Resource allocation
* 账号管理 Accounting 
* 保护 Protection

### 所有操作系统共同的系统组件
* **Process Management**
* **Main Memory Management**
* **File Management**
* **I/O System Management**
* **Secondary Management**
* Networking
* Protection System
* Command-Interpreter System

### Process management 进程管理
一个进程是一个正在执行的程序

进程管理负责
- 进程的管理和删除
- 进程的暂停和恢复
- 提供机制为
    * 进程同步
    * 进程交流

### Main Memory Management 主存管理
主存管理负责
- 追踪哪部分内存正在被使用，被谁使用
- 决定当内存空间可用时哪个进程被加载
- 在需要时分配和收回内存空间

### File management 文件管理
一个文件是由它的创建者定义的一系列相关信息的集合

文件管理负责
- 文件的创建和删除
- 文件夹的创建和删除
- 支持基本的管理文件和文件夹
- 映射文件到辅助存储器
- 备份文件到稳定的存储介质

### I/O system management I/O系统管理
I/O系统包含
- 缓存系统
- 通用设备驱动接口
- 特定硬件设备的驱动

### Secondary-storage management 辅存管理
大部分计算机系统使用磁盘

磁盘管理负责
- 空闲空间管理
- 存储分配
- 磁盘调度

## Process & thread 1
### 什么是进程 Process
**Process——a program in execution** 一个执行过程中的程序
* Program（executable）：磁盘上的passive实体
* Process：active entity被激活的实体，包含
    * 程序计数器
    * 栈
    * 堆
    * 文本
    * 数据
#### 什么是程序 Program
一个程序包含
- Code
- Data
- DLLs 动态链接库
- mapped files

Running a program 运行一个程序
* OS创建一个进程，并为它分配内存

Process vs Program
* 两个进程可能和同一个程序相关联
- 两条单独执行的顺序
- 文本部分相同，数据、堆、栈都不同

### Process states 进程状态
一个进程执行时，它会改变状态

**基本状态**
- running：指令正在执行
- waiting：进程等待某个事件发生
- ready：进程等待分配给CPU

**扩展状态**
- new：进程被创建
- terminated：进程结束执行

![process states](https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1474977550,2975918179&fm=26&gp=0.jpg)

*为什么waiting之后不能直接running？*  
如果有两条队列都能进入running状态，调度很麻烦。同时只有一条队列进入running队列也对所有进程公平。

### Process creation 进程创建
四种典型事件
- 系统初始化
- 用户请求创建
- 系统调用相应接口
    * Unix:fork()
    * Windows:CreateProcess()
- 开启一个批处理任务

### Process hierarchies 进程层次
父进程可以创建子进程，子进程可以继续创建子进程，形成进程树

### Process relationships 进程关系
#### Resource sharing
- 父子进程共享全部资源
- 子进程分享父进程资源的子集
- 父子进程不共享资源
#### Execution
- 父子进程同时执行
- 父进程等子进程结束再执行
#### Address space
- 子进程复制了父进程的地址空间
- 子进程有专门的程序加载地址空间
#### Independent or cooperating

### Process termination 进程结束
- 正常退出（自愿）
- Error exit（自愿）
- Fatal error（强制） 致命错误
- 被其他进程杀死

**Exit 正常退出**
**Abort放弃**


## Process and threads 2
### Data structure of a process
#### Process control block(PCB)进程控制块
和每个进程相关联的信息，包含：
- Process state 进程状态
- Program counter 程序计数器
- CPU register 寄存器：为了能让CPU离开进程后回来还能执行
- CPU scheduling information CPU调度信息
- Memory-management information 内存管理信息
- ~~Account information~~（本课程不学习）
- ~~I/O status information~~（本课程不学习）

### Organization model 进程组织模型
进程被组织成不同的队列
- Ready一条 **<font color=darkblue>Ready queue</font>**
- New一条 **<font color=darkblue>Job queue</font>**
- Waiting一条或多条 不同的设备可以放到不同的队列 **<font color=darkblue>Device queues</font>**

### Process scheduling 进程调度
进程被需要触发的事件驱动，从一条队列转移到另一条队列

#### 调度类型
* **<font color=red>Long-term scheduling(or job scheduling)</font> 长程调度**
    **<font color=darkblue>从job queue中选一个到ready queue中</font>**
    内存可用时,从磁盘中移出一个到内存
    不太频繁，速度慢
* **<font color=red>Short-term scheduling(or CPU scheduling)</font> 短程调度**
    **<font color=darkblue>从ready queue中选一个到running</font>**
    更加频繁，速度必须快
* **<font color=red>Interrupt handling</font> 中断处理**
    **<font color=darkblue>从waiting到ready</font>**
* **<font color=red>Medium-term scheduling</font>**
    CPU和内存资源管理的混合
    **<font color=darkblue>swapping</font>**：一个进程需要长期等待时，把它先移动到磁盘，把其他进程移入内存

### Scheduling actions
当CPU从一个进程切换到另一个进程时，系统要保存旧进程的状态，加载新进程的状态。这个过程叫 **<font color=red>上下文切换 context switch</font>**

### 线程 Threads
在进程之间切换越快越好，而创建进程和进程通信工作量很大，所以产生了线程
线程有
* 独立的 <font color=darkblue>PC, Register, Stack pointer</font>
* 共享的 <font color=darkblue>Code, Data, File</font>

进程是资源的拥有者
线程用来调度任务
![thread.png](https://i.postimg.cc/nLzGZvsN/thread.png)

#### 超线程和多核
##### 超线程
```dot
digraph hyper_threading{
    table [ shape = "plaintext", label = <
        <table border="1" cellspacing="0">
        <tr>
        <td port="r1">Register</td>
        <td port="r2">Register</td>
        </tr>
        <tr>
        <td colspan="2">ALU</td>
        </tr>
        <tr>
        <td colspan="2" port="cache">Cache</td>
        </tr>
        </table>
        >]
    mm [label="Main memory", shape="plaintext"]
    lp1 [label="Logical processor", shape="plaintext"]
    lp2 [label="Logical processor", shape="plaintext"]
    table:cache->mm->table:cache
    lp1->table:r1
    lp2->table:r2
}
```

##### 多核
```dot
digraph multicore{
    table [ shape = "plaintext", label = <
        <table border="1" cellspacing="0">
        <tr>
        <td port="r1">Register</td>
        <td port="r2">Register</td>
        </tr>
        <tr>
        <td>ALU</td>
        <td>ALU</td>
        </tr>
        <tr>
        <td port="c1">Cache</td>
        <td port="c2">Cache</td>
        </tr>
        </table>
        >]
    mm1 [label="Main memory", shape="plaintext"]
    mm2 [label="Main memory", shape="plaintext"]
    pp1 [label="Physical processor", shape="plaintext"]
    pp2 [label="Physical processor", shape="plaintext"]
    table:c1->mm1->table:c1
    table:c2->mm2->table:c2
    pp1->table:r1
    pp2->table:r2
}
```

#### 两类线程
- 用户线程
    用户层级
    所有线程在user space中完成
- 内核线程
    OS直接执行