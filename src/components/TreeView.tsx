'use client'

import { Asset } from '@/services/assets/assets-api';
import { Location } from '@/services/locations/locations-api';
import { buildTree, TreeNode } from '@/utils/build-tree';
import React, { useState } from 'react';
import { ComponentIcon } from './icon-component';
import { AssetIcon } from './icon-asset';
import { LocationIcon } from './icon-location';
import { TreeSwitcherIcon } from './icon-tree-switcher';
import { AlertStatusIcon } from './icon-alert-status';
import { BoltIcon } from './icon-bolt';
import { OperatingStatusIcon } from './icon-operating-status';

interface TreeViewProps {
  locations: Location[] | undefined
  assets: Asset[] | undefined
  searchTerm: string
  energySensorFilter: boolean
  criticalSensorFilter: boolean
  component: TreeNode
  setComponent: (node: TreeNode) => void
}

export function TreeView({ 
  locations, 
  assets, 
  searchTerm, 
  energySensorFilter, 
  criticalSensorFilter ,
  component,
  setComponent,
}: TreeViewProps) {
  const treeData = buildTree({ locations: locations ?? [], assets: assets ?? [] });
  const [expanded, setExpanded] = useState<string[]>([]);

  const icon = (node: TreeNode) => {
    if ('sensorType' in node && node.sensorType) {
      return <ComponentIcon selected={component.id === node.id} />
    }
    if ('sensorType' in node && !node.sensorId) {
      return <AssetIcon />
    }

    return <LocationIcon />
  }

  const isCritical = (node: TreeNode) => {
    if ('status' in node && node.status === 'alert' && node.sensorType) {
      return <span className='ml-2'><AlertStatusIcon /></span>
    }
  }

  const isOperating = (node: TreeNode) => {
    if ('status' in node && node.status === 'operating' && node.sensorType) {
      return <span className='ml-2'><OperatingStatusIcon /></span>
    }
  }

  const isEnergy = (node: TreeNode) => {
    if ('sensorType' in node && node.sensorType === 'energy' && node.sensorType) {
      return <span className='ml-2'><BoltIcon /></span>
    }
  }

  const expandedIcon = (node: TreeNode) => {
    if (node.children && node.children.length > 0) {
      return <span className='-ml-6'><TreeSwitcherIcon /></span>
    }
    // if (node.children && node.children.length > 0 && expanded.includes(node.id)) {
    //   return '-'
    // }
  }

  const handleExpand = (node: TreeNode) => {
    if (node.children && node.children.length > 0) {
      if (expanded.includes(node.id)) {
        setExpanded(expanded.filter(id => id !== node.id))
      } else {
        setExpanded([...expanded, node.id])
      }
    }
  }

  const filterNodes = (nodes: TreeNode[], term: string, energyFilter: boolean, criticalFilter: boolean): TreeNode[] => {
    return nodes.reduce((acc: TreeNode[], node: TreeNode) => {
      const matches = node.name.toLowerCase().includes(term.toLowerCase())
      const energyMatches = energyFilter ? (node as Asset).sensorType === "energy" : true
      const criticalMatches = criticalFilter ? (node as Asset).status === "alert" : true

      const filteredChildren = filterNodes(node.children ?? [], term, energyFilter, criticalFilter);

      if ((matches && energyMatches && criticalMatches) || filteredChildren.length > 0) {
        return [...acc, { ...node, children: filteredChildren }];
      }

      return acc;
    }, [])
  }

  const handleClick = (node: TreeNode) => {
    if (node.children && node.children.length > 0) {
      return handleExpand(node)
    }

    if ('sensorType' in node && node.sensorType) {
      return setComponent(node)
    }

    return 
  }

  const renderTree = (nodes: TreeNode[]) => {
    return (
      <ul className="list-disc pl-8 mt-2">
        {nodes.map((node) => (
          <li key={node.id} className="mb-2 list-none font-normal text-sm">
            <button 
              onClick={() => handleClick(node)} 
              className={`flex items-center pl-1 w-full ${component.id === node.id ? 'text-white bg-[#2188FF]' : ''}`}
            >
              {expandedIcon(node)}
              {icon(node)}
              {node.name}
              {isCritical(node)}
              {isOperating(node)}
              {isEnergy(node)}
            </button>
            
            {node.children && node.children.length > 0 && expanded.includes(node.id) && renderTree(node.children)}
          </li>
        ))}
      </ul>
    );
  };

  const filteredTreeData = filterNodes(treeData, searchTerm, energySensorFilter, criticalSensorFilter);

  return <div className='overflow-y-auto'>{renderTree(filteredTreeData)}</div>;
};