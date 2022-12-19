//
//  RCTinReadModule.m
//  Project
//
//  Created by Numa Maurin on 10/03/2022.
//

#import <Foundation/Foundation.h>
#import "RCTInReadModule.h"
#import <React/RCTLog.h>

@implementation RCTInReadModule

// To export a module named RCTinReadModule
RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(createInRead:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
